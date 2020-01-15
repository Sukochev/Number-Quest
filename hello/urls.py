"""hello URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include

import app.views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', app.views.home, name="home"),
    url(r'^result/', app.views.result, name="result"),
    #url(r'^homedev/', app.views.homedev, name="homedev"),
    #url(r'^resultdev/', app.views.resultdev, name="resultdev"),
]

# NOTE: Use homedev and resultdev urls to test in development. I have commented them out in production.
# When running dev server, create the main.js and main2.js files by removing --config webpack.production.config.js
# from the package.json file. The production version auto-cleans the dist folder.
