from django.urls import path
from child.views import *
urlpatterns = [
    path('test/', TestView.as_view(),name='test'),
]