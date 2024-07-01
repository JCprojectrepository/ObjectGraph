from common.authentication import NoAuthentication
from rest_framework import authentication 
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from logging import getLogger

logger = getLogger(__name__)

class TestHandler(APIView):
    authentication_classes = [NoAuthentication]
    def get(self, request,format=None):
        logger.info("PeriodUpdateHandler")
        # テストデータの生成
        test_data = {
            "id": 1,
            "name": "Test Name",
            "description": "This is a test description",
            "status": "active"
        }

        # ステータスコードの設定
        http_status = status.HTTP_200_OK

        # JSONレスポンスの返却
        return Response(
            data=test_data,
            status=http_status,
        )