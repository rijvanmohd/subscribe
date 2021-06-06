from rest_framework import serializers, fields
from .models import Subscription


class SubscriptionSerializer(serializers.ModelSerializer):
    created_on = serializers.DateTimeField(
        format="%d-%m-%Y %l:%M %p", read_only=True)

    class Meta:
        model = Subscription
        fields = ('email', 'created_on')
