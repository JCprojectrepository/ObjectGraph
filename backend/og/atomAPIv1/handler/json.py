from common.authentication import NoAuthentication
from rest_framework import authentication 
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from logging import getLogger
from django.conf import settings
import json
import os

# JSONファイルのディレクトリまでの絶対パスを取得
JSONDIR = os.path.join(settings.BASE_DIR, 'atomAPIv1/json')


logger = getLogger(__name__)

class JsonHandler(APIView):
    authentication_classes = [NoAuthentication]
    def get(self, request,userid,objectid,format=None):
        logger.info("PeriodUpdateHandler")

        # ../json/{id}.jsonを読み込み
        json_data = None
        try:
            with open(os.path.join(JSONDIR, f"{userid}.json"), "r") as f:
                json_data = json.load(f)
                # JSONファイルの中でidがObjectIDと一致するものを取得
                for obj in json_data:
                    if obj["id"] == objectid:
                        json_data = obj
                        break

        except Exception as e:
            logger.error(e)
            # ステータスコードの設定
            http_status = status.HTTP_404_NOT_FOUND
            # JSONレスポンスの返却
            return Response(
                data={ "error": "json file not found" },
                status=http_status,
            )

        # ステータスコードの設定
        http_status = status.HTTP_200_OK

        # JSONレスポンスの返却
        return Response(
            data={ 
                "name":"aaa",
                "json":json_data },
            status=http_status,
        )