import { useTranslation } from "react-i18next";
import { getWordPressImageUrl } from "../../data/images";

const WHATSAPP_NUMBER = "51951690209";

const GROUPS_IMAGE =
  "https://perupowerhouse.com/wp-content/uploads/2022/02/89226359_1819160668217692_3004242886687457280_n.jpg";

const qrSource = (data: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&margin=6&data=${encodeURIComponent(data)}`;

type GroupBlockProps = {
  qrData: string;
  location: string;
  hosts?: string;
  time: string;
  address?: string;
};

const GroupBlock = ({ qrData, location, hosts, time, address }: GroupBlockProps) => (
  <div className="flex items-start gap-4 border-t-2 border-[#111111] pt-5 sm:gap-5">
    <img src={qrSource(qrData)} alt={`QR ${location}`} width={108} height={108} className="h-[100px] w-[100px] shrink-0 object-contain sm:h-[108px] sm:w-[108px]" />
    <div>
      <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-[#111111] sm:text-2xl">{location}</h3>
      {hosts && <p className="mt-1 text-sm font-bold uppercase text-[#111111]">{hosts}</p>}
      <p className="mt-1 text-sm font-bold text-[#111111]">{time}</p>
      {address && <p className="mt-1 max-w-[220px] text-xs font-medium leading-5 text-[#3d3d3d]">{address}</p>}
    </div>
  </div>
);

const GruposDeConexion = () => {
  const { t } = useTranslation();
  const whatsappMessage = encodeURIComponent(t("whatsapp.message"));
  const whatsappGroupData = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const thursdayTime = t("grupos.thursdayTime");
  const allThursdays = t("grupos.allThursdays").split(" ");

  return (
    <section className="bg-white px-6 pb-14 pt-28 text-[#111111] md:px-10 md:pb-24 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex items-center justify-between gap-4 md:mb-14">
          <img src={getWordPressImageUrl("2022/01/logo-powerhouse-negro.png")} alt="PowerHouse" className="h-10 w-auto object-contain md:h-12" />
          <span className="text-right text-xs font-black uppercase leading-tight tracking-[0.2em] text-[#111111] sm:text-sm">
            {t("grupos.headerTime")}
          </span>
        </header>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.3fr_0.8fr] lg:gap-10 xl:gap-16">
          <div className="order-2 flex flex-col gap-10 lg:order-1 lg:justify-between">
            <GroupBlock location="PIURA" time={thursdayTime} qrData={whatsappGroupData} />
            <GroupBlock
              location="26 DE OCTUBRE"
              hosts="ENJOY Y LESLIE"
              time={thursdayTime}
              address="URB SOL DE PIURA MZ BB LOTE 11"
              qrData={whatsappGroupData}
            />
          </div>

          <div className="order-1 flex flex-col lg:order-2">
            <h1 className="text-center">
              <span className="block text-3xl font-black uppercase leading-none tracking-tight text-[#111111] md:text-4xl xl:text-5xl">{t("grupos.groupTitle1")}</span>
              <span className="mt-1 block text-[clamp(3.5rem,11vw,8.5rem)] font-black uppercase leading-[0.9] tracking-tight text-[#111111]">{t("grupos.groupTitle2")}</span>
            </h1>

            <div className="relative mt-8 overflow-hidden bg-[#111111] md:mt-10">
              <img src={GROUPS_IMAGE} alt={t("grupos.imageAlt")} className="h-full w-full object-cover lg:aspect-[4/3]" />
            </div>

            <p className="mt-8 text-center text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tight text-[#111111] md:mt-10">
              {allThursdays.map((word, index) => (
                <span key={`${word}-${index}`} className="block">
                  {word}
                  {index < allThursdays.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="order-3 flex flex-col gap-10 lg:justify-between">
            <GroupBlock location="CASTILLA" hosts="VÍCTOR Y KATY" time={thursdayTime} qrData={whatsappGroupData} />
            <GroupBlock location="VIRTUAL" hosts="MIKE Y BONNIE" time={thursdayTime} qrData={whatsappGroupData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GruposDeConexion;
