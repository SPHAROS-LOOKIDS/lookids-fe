import Image from "next/image";

export default function CardMainImage() {
  return (
    <div>
      <div>
        <div
          className="relative mx-auto w-full rounded-xl" // 여기서 rounded-xl 추가
          style={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src="/jihunpistol.jpg"
            alt="지훈지훈피스톨"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-xl" // 추가로 Image에도 rounded-xl 클래스 추가
          />
        </div>
      </div>
    </div>
  );
}
