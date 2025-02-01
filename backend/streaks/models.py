from django.db import models
from django.contrib.auth.models import User
import datetime

class Streak(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    habit = models.CharField(max_length=100)
    current_streak = models.IntegerField(default=0)
    best_streak = models.IntegerField(default=0)
    last_updated = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.user.username} - {self.habit}'

    def update_streak(self):
        today = datetime.date.today()
        if (today - self.last_updated).days == 1:
            self.current_streak += 1
        else:
            self.current_streak = 1
        self.best_streak = max(self.best_streak, self.current_streak)
        self.last_updated = today
        self.save()
