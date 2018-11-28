from django.shortcuts import render, get_object_or_404

# Create your views here.
def home(request):
    return render(request, 'home.html')


def result(request):
    return render(request, 'result.html')

def homedev(request):
    return render(request, 'home.dev.html')


def resultdev(request):
    return render(request, 'result.dev.html')