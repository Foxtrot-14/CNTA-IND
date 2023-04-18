from django.urls import path
from .views import GraphView
urlpatterns = [
    path('graph/<int:pk>-<str:pk>', GraphView.as_view(),name='graph'),
]