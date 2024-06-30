type HeaderOptions = {
  cookies?: any;
  responseType?: 'json' | 'html';
}

export const GetHeader = ({ cookies, responseType = 'json' }: HeaderOptions) => {
  const headers = {
    "accept": responseType === 'json' ? "application/json" : "text/html",
    'Content-Type': 'application/json',
    ...(cookies?.accesstoken && { "Authorization": `JWT ${cookies.accesstoken}` })
  };

  return { headers };
};
