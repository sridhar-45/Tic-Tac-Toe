from django.urls import path
from . import views

app_name = "game"
urlpatterns = [
    path("manual/", views.manual_mode, name = "manual_mode"),
    path("computer/", views.computer_mode, name = "computer_mode"),
    path("", views.select_mode, name = "select_mode"),
]