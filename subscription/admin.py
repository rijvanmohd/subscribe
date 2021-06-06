# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Subscription

# Register your models here.


class SubscriptionAdmin(admin.ModelAdmin):
    model = Subscription
    list_display = ("email", "created_on")


admin.site.register(Subscription, SubscriptionAdmin)
