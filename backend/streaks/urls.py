from django.urls import path
from . import views

urlpatterns = [
    path('streaks/', views.streaks, name='streaks'),
    path('update/<str:habit>/', views.update_streak, name='update_streak'),
]
