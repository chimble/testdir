from django.shortcuts import render
from django.http import HttpResponse
from .serializers import StudentSerializer
from .serializers import ChoiceSerializer
from rest_framework import viewsets
from .models import Student
from .models import Choice

# Create your views here.


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer


class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all().order_by('id')
    serializer_class = ChoiceSerializer


def index(request):
    return render(request, 'dayinthelife.html')


def door(request):
    return render(request, 'door.html')


def coffee(request):
    return render(request, 'coffee.html')


def gotoclass(request):
    return render(request, 'gotoclass.html')


def python(request):
    return render(request, 'python.html')


def userinterface(request):
    return render(request, 'userinterface.html')


def uilesson(request):
    return render(request, 'uilesson.html')


def pythonlesson(request):
    return render(request, 'pythonlesson.html')


def uihello(request):
    return render(request, 'uihello.html')


def pythonhello(request):
    return render(request, 'pythonhello.html')


def story(request):
    return render(request, 'story.html')
