'use server';

import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:storyoser@naver.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

let subscription: webpush.PushSubscription | null = null;

export async function subscribeUser(sub: webpush.PushSubscription) {
  subscription = sub;
  return { success: true };
}

export async function transformPushSubscription(
  sub: PushSubscription
): Promise<webpush.PushSubscription> {
  const rawKeys = await sub.toJSON().keys;

  if (!rawKeys || !rawKeys.p256dh || !rawKeys.auth) {
    throw new Error('Invalid subscription keys');
  }

  return {
    endpoint: sub.endpoint,
    keys: {
      p256dh: rawKeys.p256dh,
      auth: rawKeys.auth,
    },
  };
}

export async function unsubscribeUser() {
  subscription = null;
  return { success: true };
}

export async function sendNotification(message: string) {
  if (!subscription) {
    throw new Error('No subscription available');
  }

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: '루키즈 알림',
        body: message,
        icon: '/icons/favicon-96x96.png',
      })
    );
    return { success: true };
  } catch (error) {
    console.error('Error sending push notification:', error);
    return { success: false, error: 'Failed to send notification' };
  }
}
