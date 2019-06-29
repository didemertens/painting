from django.urls import path
from search_paint import views

urlpatterns = [
    path('', views.home, name="home"),
    path('vermeer/', views.paintingVermeer, name="painting"),
]
