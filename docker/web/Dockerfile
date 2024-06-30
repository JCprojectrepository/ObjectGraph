FROM ubuntu:20.04

ENV TZ="JST-9"
ENV DEBIAN_FRONTEND=noninteractive
ENV LANG=C.UTF=8 PYTHONIOENCODING=utf-8
  
RUN \
  rm -f /etc/apt/apt.conf.d/docekr-clean 

# aptパッケージのインストール
ARG EXTRA_APT_PACKAGES=""
# RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
#     --mount=type=cache,target=/var/lib/apt,sharing=locked \
RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y \
  python3 python3-pip python3-dev gcc \
  git \
  curl \
  tzdata \
  sudo \
  libssl-dev \
  libcairo2-dev \
  ${EXTRA_APT_PACKAGES}

RUN export PYCURL_SSL_LIBRARY=openssl

# 必要なディレクトリを作成
RUN useradd -m -p atom -s /bin/bash atom && \
  mkdir -p /home/app && chown atom:atom /home/app && \
  mkdir -p /var/log/atom && chown atom:atom /var/log/atom && \
  mkdir -p /mnt/cache && chown atom:atom /mnt/cache
# RUN echo "atom ALL=(ALL:ALL) NOPASSWD:ALL">/etc/sudoers.d/atom


# setup cron
# ADD ./code-college/atomGC/cron/cron.d /etc/cron.d/
# RUN chmod 0644 /etc/cron.d/*

# install library
ADD ./requirements.txt requirements.txt
RUN pip3 install install -r requirements.txt

#ADD --chown=atom:atom --chmod=777 ./app /home/atom/work/code-college
#RUN chmod 777 /home/atom/work/code-college/common
#RUN chmod 744 /home/atom/work/code-college/deploy/staging/scripts/migrate.sh



