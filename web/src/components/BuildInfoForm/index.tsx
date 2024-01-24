import { RouteData } from "../../../../common/route-processing/types";
import { SplitRow } from "../SplitRow";
import styles from "./styles.module.css";
import classNames from "classnames";

interface BuildInfoFormProps {
  buildData: RouteData.BuildData;
  onSubmit: (buildData: RouteData.BuildData) => void;
}

export function BuildInfoForm({ buildData, onSubmit }: BuildInfoFormProps) {
  return (
    <div className={classNames(styles.form)}>
      <SplitRow
        left={<div className={classNames(styles.label)}>Класс</div>}
        right={
          <div className={classNames(styles.value)}>
            {buildData.characterClass}
          </div>
        }
      />
      <SplitRow
        left={<div className={classNames(styles.label)}>Бандиты</div>}
        right={
          <div className={classNames(styles.value)}>
            {buildData.bandit == "None" ? "Убить всех" : buildData.bandit}
          </div>
        }
      />
      <SplitRow
        left={<div className={classNames(styles.label)}>Старт лиги</div>}
        right={
          <div className={classNames(styles.value)}>
            <input
              type="checkbox"
              checked={buildData.leagueStart}
              onChange={(evt) => {
                onSubmit({
                  ...buildData,
                  leagueStart: evt.target.checked,
                });
              }}
              aria-label="League Start"
            />
          </div>
        }
      />
      <SplitRow
        left={<div className={classNames(styles.label)}>Библиотека</div>}
        right={
          <div className={classNames(styles.value)}>
            <input
              type="checkbox"
              checked={buildData.library}
              onChange={(evt) => {
                onSubmit({
                  ...buildData,
                  library: evt.target.checked,
                });
              }}
              aria-label="Library"
            />
          </div>
        }
      />
    </div>
  );
}
