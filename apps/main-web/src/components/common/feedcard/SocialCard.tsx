'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import { Card, CardContent, CardFooter } from '@repo/ui/components/ui/card';

import { Heart, Share2, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SocialCard({
  isDetail,
  feedCode = '1',
}: {
  isDetail: boolean;
  feedCode?: string;
}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card className={`h-2/5 overflow-hidden p-4 ${isDetail ? 'border-0' : ''}`}>
      {/* Social Card Image */}
      <div className="relative">
        <Link href={`/feed/${feedCode}`}>
          <Image
            src="/pome.jpg"
            width={500}
            height={300}
            alt="Cartoon cat sleeping on a green couch"
            className="w-full rounded-lg object-cover"
          />
        </Link>
        {!isDetail && (
          <div
            className={`absolute right-3 top-3 rounded-full p-2 ${isLiked ? 'bg-red-500' : 'opacity-50 bg-gray-800'}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              fill="white"
              className={`h-4 w-4 ${isLiked ? 'text-white' : 'text-gray-300'}`}
            />
          </div>
        )}
      </div>
      <CardContent className="mt-4 px-2">
        <div className="flex items-start justify-between">
          <div className="mb-4 flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                src="/jihunpistol.jpg"
                alt="Jihun Sin"
                className="object-cover"
              />
              <AvatarFallback>RF</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-md font-extrabold text-black">Jihun Sin</h3>
              <p className="text-xs text-black">@nick**me</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
        <p
          className={`w-full text-sm text-gray-400 line-clamp-2 text-ellipsis whitespace-pre-wrap ${isDetail ? '' : 'line-clamp-2'}`}
        >
          지훈이가 좋아하는 랜덤게임 무슨게임 ? 게임 Start 시멘트! 시멘트!
          시멘트! 시멘트! 웃겨보려고 한건 아니지만 웃긴다... 피식... 2년동안
          얼굴 하나로 먹고 살고 있다. 허수키 견생 2회차
        </p>
      </CardContent>

      {/* SocialCard Reaction Section */}
      <CardFooter className="flex gap-x-5 border-t border-gray-100 px-2 py-3 text-xs text-gray-400">
        <ul className="flex items-center gap-x-2">
          <li>
            <ThumbsUp className="text-lookids h-4 w-4" />
          </li>
          <li>{`${178} Likes`}</li>
        </ul>
        <ul className="flex items-center gap-x-2">
          <li>
            <Share2 className="text-lookids h-4 w-4" />
          </li>
          <li>{`${12} Shares`}</li>
        </ul>
      </CardFooter>
    </Card>
  );
}
