# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Subscription
from .serializers import SubscriptionSerializer
# Create your views here.


class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

    def create(self, request):
        serializer = SubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            subscribe = serializer.save()
            return Response(self.get_serializer(subscribe).data, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'Email Already Exist!'}, status=status.HTTP_400_BAD_REQUEST)
