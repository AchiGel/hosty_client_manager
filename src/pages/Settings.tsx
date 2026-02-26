import SettingsHeader from "../components/main/settings/SettingsHeader";
import SettingsHotelInformation from "../components/main/settings/SettingsHotelInformation";
import SettingsServices from "../components/main/settings/SettingsServices";

const Settings = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <SettingsHeader />
        <SettingsServices />
        <SettingsHotelInformation />
      </div>
    </div>
  );
};

export default Settings;
