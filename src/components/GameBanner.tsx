interface GameBannerProps {
  bannerUrl: string
  name: string
  adCounter: number
}

export function GameBanner(props:GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-box-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.name}</strong>
        <span className="text-300 text-zinc-300 block">{props.adCounter} anúncio(s)</span>
      </div>
    </a>
  )
}