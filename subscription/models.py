# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Subscription(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(unique=True)
