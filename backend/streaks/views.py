from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import Streak

@login_required
def streaks(request):
    streaks = Streak.objects.filter(user=request.user)
    return JsonResponse({
        'streaks': [
            {
                'habit': s.habit,
                'current': s.current_streak,
                'best': s.best_streak
            } for s in streaks
        ]
    })

@login_required
def update_streak(request, habit_name):
    try:
        streak = Streak.objects.get(user=request.user, habit=habit_name)
    except Streak.DoesNotExist:
        streak = Streak.objects.create(
            user=request.user,
            habit=habit_name,
            current_streak=0,
            best_streak=0
        )
    
    streak.update_streak()
    return JsonResponse({
        'habit': habit_name,
        'current': streak.current_streak,
        'best': streak.best_streak
    })
