from django.urls import path
from .views import *
urlpatterns = [
    path('bmig/', BMIGView.as_view()),
    path('muacg/', MUACGView.as_view()),
    path('hcfg/', HCFGView.as_view()),
    path('hfag/', HFAGView.as_view()),
    path('wfag/', WFAGView.as_view(),),
    path('wfhg/', WFHGView.as_view(),),
    path('bmib/', BMIBView.as_view(),),
    path('muacb/', MUACBView.as_view(),),
    path('hcfb/', HCFBView.as_view(),),
    path('hfab/', HFABView.as_view(),),
    path('wfab/', WFABView.as_view(),),
    path('wfhb/', WFHBView.as_view(),),
]