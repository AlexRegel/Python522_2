from django.db import models


class GtPlanets(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    image = models.ImageField(upload_to='gt_planets/images/')
    url = models.URLField(blank=True)  # Поле не обязательное для заполнения

    # def __str__(self):
    #     return self.title
