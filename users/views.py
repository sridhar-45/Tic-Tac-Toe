from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import RegistrationForm
from django.contrib import messages
from django.http import HttpResponse

# Create your views here.
def register(request):
    # If the form was submitted (`POST` method), then we want to **process the data**.
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Account Created successfully!")
            return redirect("game:select_mode")
        # else:
        #     return HttpResponse(f" Form erros: {form.errors}")
    else:
        form = RegistrationForm()
    
    #DJango created and empty form using...
    #Then Django renders the HTML page and sends it to browser...takes as form    
    return render(request, 'users/register.html', {'form': form})        