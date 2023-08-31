interface InfoTextProps {
  infoText: string;
  text: string;
}

export function InfoText({ infoText, text }: InfoTextProps) {
  return (
    <div className="flex flex-col">
      <p className="text-neutral-950 font-extrabold text-2xs -mb-1">
        {infoText}
      </p>
      <h4 className="text-neutral-800/40 font-medium">{text}</h4>
    </div>
  );
}
