from django.conf import settings
from django.shortcuts import render
import requests

# Create your views here.
def home(request):
  return render(request,'home.html')


def paintingVermeer(request):
    API_KEY = settings.API_KEY
    response = requests.get('https://www.rijksmuseum.nl/api/nl/collection/SK-A-2344?key=' + API_KEY + '&format=json')
    paint_info = response.json()
    return render(request, 'painting.html', {
        'painter': paint_info['artObject']['principalMaker'],
        'painting_title': paint_info['artObject']['label']['title'],
        'painting_img' : paint_info['artObject']['webImage']['url'],
    })

def paintingAvercamp(request):
    API_KEY = settings.API_KEY
    response = requests.get('https://www.rijksmuseum.nl/api/nl/collection/SK-A-1718?key=' + API_KEY + '&format=json')
    paint_info = response.json()
    return render(request, 'painting.html', {
        'painter': paint_info['artObject']['principalMaker'],
        'painting_title': paint_info['artObject']['label']['title'],
        'painting_img' : paint_info['artObject']['webImage']['url'],
    })

def paintingAppel(request):
    API_KEY = settings.API_KEY
    response = requests.get('https://www.rijksmuseum.nl/api/nl/collection/SK-A-5002?key=' + API_KEY + '&format=json')
    paint_info = response.json()
    return render(request, 'painting.html', {
        'painter': paint_info['artObject']['principalMaker'],
        'painting_title': paint_info['artObject']['label']['title'],
        'painting_img' : paint_info['artObject']['webImage']['url'],
    })

def paintingMauve(request):
    API_KEY = settings.API_KEY
    response = requests.get('https://www.rijksmuseum.nl/api/nl/collection/SK-A-3602?key=' + API_KEY + '&format=json')
    paint_info = response.json()
    return render(request, 'painting.html', {
        'painter': paint_info['artObject']['principalMaker'],
        'painting_title': paint_info['artObject']['label']['title'],
        'painting_img' : paint_info['artObject']['webImage']['url'],
    })


# JOHANNES VERMEER
# https://www.rijksmuseum.nl/api/nl/collection/SK-A-2344?key=[API_KEY]&format=json


# KAREL APPEL
# https://www.rijksmuseum.nl/api/nl/collection/SK-A-5002?key=[API_KEY]format=json

# Hendrick Avercamp
# https://www.rijksmuseum.nl/api/nl/collection/SK-A-1718?key=[API_KEY]format=json

# Anton Mauve
# https://www.rijksmuseum.nl/api/nl/collection/SK-A-3602?key=[API_KEY]format=json
