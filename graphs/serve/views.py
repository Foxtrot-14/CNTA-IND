from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .renderers import GraphRenderer
from .models import *
from .serializers import *

class BMIGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = BMIG.objects.filter()
        serializer = BMIGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class MUACGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = MUACG.objects.filter()
        serializer = MUACGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class HCFGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = HCFG.objects.filter()
        serializer = HCFGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)

class HFAGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = HFAG.objects.filter()
        serializer = HFAGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class WFAGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = WFAG.objects.filter()
        serializer = WFAGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class WFHGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = WFHG.objects.filter()
        serializer = WFHGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
      
class BMIBView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = BMIB.objects.all()[0]
        serializer = BMIBSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class MUACBView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = MUACB.objects.filter()
        serializer = MUACBSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class HCFBView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = HCFB.objects.filter()
        serializer = HCFBSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)

class HFABView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = HFAB.objects.filter()
        serializer = HFABSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class WFABView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = WFAB.objects.filter()
        serializer = WFABSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class WFHBView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = WFHB.objects.filter()
        serializer = WFHBSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)