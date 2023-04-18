from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .renderers import GraphRenderer


class GraphView(APIView):
    renderer_classes = [GraphRenderer]
    def get_object(self, pk):
        pass
        # try:
        #     return Child.objects.get(pk = pk)
        # except Child.DoesNotExist:
        #     return None
    def get(self, pk, request,*args, **kwargs):
        return Response({'msg':'This is a test'}, status = status.HTTP_200_OK)