from django.db import models
import uuid
from django.utils import timezone
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.base_user import BaseUserManager
from markdownx.models import MarkdownxField
# Create your models here.

class UserManager(BaseUserManager):
    """ユーザーマネージャー."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """メールアドレスでの登録を必須にする"""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)

        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """is_staff(管理サイトにログインできるか)と、is_superuer(全ての権限)をFalseに"""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """スーパーユーザーは、is_staffとis_superuserをTrueに"""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date_joined = models.DateTimeField(('アカウント作成日'), default=timezone.now)
    name = models.CharField(('氏名'), max_length=100, blank=True, null=True)
    furigana = models.CharField(('フリガナ'),default="", max_length=30,blank=True, null=True)
    email = models.EmailField(('メールアドレス'), unique=True)
    is_staff = models.BooleanField(('スタッフ権限'),default=False)
    remarks = models.TextField(
        verbose_name='備考',
        blank=True,
        null=True,
        default=None,
        max_length=255,
    )
    objects = UserManager()
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = ('user')
        verbose_name_plural = ('users')


class SiteMaster(models.Model):
    description = models.TextField('サイトの説明', max_length=255,default=None)
    keywords = models.CharField('サイトのキーワード', max_length=255,default=None)
    admin = models.CharField('管理者', max_length=255,default=None)
    email = models.EmailField('問い合わせ転送先メールアドレス', max_length=255,default=None)
    twitter = models.CharField('Twitterアカウント', max_length=255, blank=True,default=None)
    facebook = models.CharField('FaceBookアカウント', max_length=255, blank=True,default=None)
    instagram = models.CharField('Instagramアカウント', max_length=255, blank=True,default=None)
    tiktok = models.CharField('tiktokアカウント', max_length=255, blank=True,default=None)
    youtube = models.CharField('YouTubeアカウント', max_length=255, blank=True,default=None)
    google_ad_html = models.TextField('アドセンスHTML', blank=True,default=None)
    google_analytics_html = models.TextField('アナリティクスHTML', blank=True,default=None)

    def __str__(self):
        return self.admin


class ContactMaster(models.Model):
    date = models.DateTimeField(('投稿日時'), default=timezone.now,blank=True, null=True)
    last_name = models.CharField("姓", max_length=30,default=None,blank=False, null=True)
    first_name = models.CharField("名", max_length=30,default=None,blank=False, null=True)
    last_name_furigana = models.CharField("姓フリガナ", max_length=30,default=None,blank=False, null=True)
    first_name_furigana = models.CharField("名フリガナ", max_length=30,default=None,blank=False, null=True)
    email = models.EmailField(('メールアドレス'),max_length=100)
    tel = models.CharField(('電話番号'),max_length=100, default=None,blank=True, null=True)
    personal_information = models.BooleanField(('個人情報利用に関する同意'),default=False)
    is_reply = models.BooleanField(('返信済かどうか'),default=False)
    message = models.TextField(
        verbose_name='お問い合わせ内容',
        blank=True,
        null=True,
        max_length=5000,
    )
    def __str__(self):
        return str(self.date)

class NewsMaster(models.Model):
    title = models.CharField(('タイトル'), max_length=45,default="")
    text = MarkdownxField('本文', help_text='Markdown形式で書いてください。', default=None,blank=True, null=True)
    release_date = models.DateTimeField(('公開日'), default=None,blank=True, null=True)
    update_date = models.DateTimeField(('更新日'), default=None,blank=True, null=True)
    is_active = models.BooleanField(('公開状況'),default=False)
    is_new = models.BooleanField(('新着かどうか'),default=False)

    def __str__(self):
        return self.title
