from django.urls import path
from account.views import *
urlpatterns = [
    path('register/', RegistrationView.as_view(),name='register'),
    path('login/', LoginView.as_view(),name='login'),
    path('profile/', ProfileView.as_view(),name='profile'),
    path('test/', TestView.as_view(),name='test'),
]