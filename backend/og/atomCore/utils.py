from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HealthCheckHandler(APIView):


    def get(self,request,format=None):
        request_data = request.data
        http_status = status.HTTP_200_OK
        return Response(
            status=http_status,
        )
