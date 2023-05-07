import Feature2Icon from "./icons/Feature2Icon";
import Feature3Icon from "./icons/Feature3Icon";
import HandshakeIcon from "./icons/HandshakeIcon";

const features = [
  {
    id: 1,
    icon: HandshakeIcon,
    title: "Buyer and seller",
    description:
      "Kindly accommodate direct transaction between farmers and buyers",
  },
  {
    id: 2,
    icon: Feature2Icon,
    title: "Service provider",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit augue dui et commodo id risus leo a fames.",
  },
  {
    id: 3,
    icon: Feature3Icon,
    title: "Friendly and Safe",
    description:
      "A user friendly platform that generates market opportunities for farmers and industry buyers.",
  },
];

export default function Features() {
  return (
    <div className="grid lg:grid-cols-3 gap-4 max-w-6xl mx-auto -mt-20 px-4 lg:px-0">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col items-center bg-white px-6 lg:px-12 py-8 shadow-lg"
        >
          <feature.icon className="w-20 h-20 text-primary" />
          <h1 className="text-2xl font-bold text-center">{feature.title}</h1>
          <p className="text-center mt-3">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
