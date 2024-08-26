from django.urls import path
from .views import *
from django.views.decorators.cache import cache_page


urlpatterns = [
    # path("api/v1/download/", DownloadToDBAPIView.as_view()),
    path("api/v1/productlist/", cache_page(60)(ProductListAPIView.as_view()), name="productlist"),
    path("api/v1/aboba/", Aboba.as_view(), name="productlist")

]
