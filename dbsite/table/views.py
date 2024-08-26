from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
import csv
from .models import *
from .serializers import *
from django.core.cache import cache


class DownloadToDBAPIView(APIView):
    def get(self, request):
        with open("../article_def_v_orig.csv", "r", newline='', encoding="utf-8") as f:
            csv_reader = csv.reader(f)
            next(csv_reader)

            for row in csv_reader:
                product = Product(
                    articleid=int(row[0]),
                    subarticleid=int(row[1]),
                    articlename=row[2],
                    external_str_id=row[3],
                    ecrlongname=row[4]
                )
                product.save()

        return Response("ok")


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class Aboba(APIView):
    def get(self, request):
        return Response("aboba")