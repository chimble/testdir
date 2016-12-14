from django.conf.urls import url, include
from . import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^door$', views.door, name='door'),
    url(r'^coffee$', views.coffee, name='coffee'),
    url(r'^gotoclass$', views.gotoclass, name='gotoclass'),
    url(r'^python$', views.python, name='python'),
    url(r'^userinterface$', views.userinterface, name='userinterface'),
    url(r'^uilesson$', views.uilesson, name='uilesson'),
    url(r'^pythonlesson$', views.pythonlesson, name='pythonlesson'),
    url(r'^pythonhello$', views.pythonhello, name='pythonhello'),
    url(r'^uihello$', views.uihello, name='uihello'),
    url(r'^story$', views.story, name='story'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/dayinthelifeapp/login/'}, name='logout'),
    url('^', include('django.contrib.auth.urls')),
]
