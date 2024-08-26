from django.db import models


class Product(models.Model):
    articleid = models.IntegerField()
    subarticleid = models.IntegerField()
    articlename = models.CharField(max_length=256)
    external_str_id = models.CharField(max_length=256)
    ecrlongname = models.CharField(max_length=256)

