from django.urls import path
from child.views import *
urlpatterns = [
    path('child/', AddChildView.as_view(),name='childadd'),
    path('child-<pk>', ViewChild.as_view(),name='child'),
]