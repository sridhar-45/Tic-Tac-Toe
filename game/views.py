from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.
# @login_required
def select_mode(request):
    return render(request, 'game/select_mode.html')


@login_required
def manual_mode(request):
    return render(request, 'game/manual_mode.html')


@login_required
def computer_mode(request):
    return render(request, 'game/computer_mode.html')

