import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../../style';

const GYN = ({gyn}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>GYN History</Text>
        {expand && (
          <View>
            <Text style={styles.subtitle}>
              {`Last Period: ${gyn.lastPeriod.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Period Length: \n\n\t 7 Days or less: ${gyn.periodLength.lessThan} \n\n\t More than 7 Days: ${gyn.periodLength.moreThan}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Cycle Length: \n\n\t Less than 21 days: ${gyn.cycleLength.lessThan} \n\n\t About 21-42 days: ${gyn.cycleLength.about} \n\n\t More than 43 days: ${gyn.cycleLength.moreThan}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Age of Menarche: ${gyn.menarche.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Last PAP smear: ${gyn.papDate.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Abnormal Pap: \n\n\t History: ${gyn.abnormalPap.history} \n\n\t Notes: ${gyn.abnormalPap.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Treated before: \n\n\t Chlamydia: ${gyn.sti.chlamydia} \n\n\t Gonorrhea: ${gyn.sti.gonorrhea} \n\n\t Genital Warts: ${gyn.sti.genitalWarts} \n\n\t Herpes: ${gyn.sti.herpes} \n\n\t Trichomonas: ${gyn.sti.trichomonas} \n\n\t Syphilis: ${gyn.sti.syphilis} \n\n\t None: ${gyn.sti.none}`}
            </Text>
            <Text style={styles.subtitle}>
              {`HIV: \n\n\t History: ${gyn.hiv.history} \n\n\t Notes: ${gyn.hiv.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`DES: \n\n\t History: ${gyn.des.history} \n\n\t Notes: ${gyn.des.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Sexually Active: ${gyn.sexuallyActive.history}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Sex before 16: \n\n\t History: ${gyn.underAge.history} \n\n\t Notes: ${gyn.underAge.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`More than 5 partners: \n\n\t History: ${gyn.multiplePartners.history} \n\n\t Notes: ${gyn.multiplePartners.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Reliable Contraception: \n\n\t History: ${gyn.useContraception.history} \n\n\t Notes: ${gyn.useContraception.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Birth Control type: \n\n\t History: ${gyn.useBirthControl.history} \n\n\t Notes: ${gyn.useBirthControl.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Past birth control methods: \n\n\t Condoms: ${gyn.contraceptions.condoms} \n\n\t Birth Control Pills: ${gyn.contraceptions.thePill} \n\n\t Withdrawal: ${gyn.contraceptions.pullOut} \n\n\t Tubal Ligation: ${gyn.contraceptions.tubesTied} \n\n\t Diaphram: ${gyn.contraceptions.diaphram} \n\n\t Patch: ${gyn.contraceptions.patch} \n\n\t Vaginal Film: ${gyn.contraceptions.film} \n\n\t Other: ${gyn.contraceptions.other}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Sexually Active last 12 months: ${gyn.activeCurrent.history}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Sex since last period: \n\n\t History: ${gyn.active.history} \n\n\t Notes: ${gyn.active.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Sexual Partners: \n\n\t Men: ${gyn.sexualPartners.men} \n\n\t Women: ${gyn.sexualPartners.women} \n\n\t Other: ${gyn.sexualPartners.other}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Number of Partners: \n\n\t Men: ${gyn.numberOfPartners.male.number} \n\n\t Women: ${gyn.numberOfPartners.female.number} \n\n\t Other: ${gyn.numberOfPartners.other.number}`}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default GYN;
