<template>
  <div class="wrap">
    <h2>TimeLine</h2>
    <p>Timeline Default</p>
    <v-timeline direction="horizontal">
      <v-timeline-item>
        <template v-slot:opposite>Opposite content1</template>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite> Opposite content 2</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite> Opposite content3 </template>
        <div>
          <div class="text-h6">제목입니다.</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
    <br /><br />
    <p>timeline내용은 한쪽으로 몰 수 있다.</p>
    <v-timeline side="end">
      <v-timeline-item
        v-for="item in items"
        :key="item.id"
        :dot-color="item.color"
        size="large"
      >
        <v-alert
          :value="true"
          :color="item.color"
          :icon="item.icon"
          class="white--text"
        >
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
          imperdiet nec ut, sed euismod convenire principes at. Est et nobis
          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi
          sententiae.
        </v-alert>
      </v-timeline-item>
    </v-timeline>
    <br /><br />
    <p>dot에 아이콘을 넣을 수 있다.</p>
    <v-timeline align="start">
      <v-timeline-item
        v-for="(item, i) in dotItems"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card>
          <v-card-title :class="`text-${item.color}`"
            >Title {{ i + 1 }}</v-card-title
          >
          <v-card-text class="text--white">
            {{ item.content }}
          </v-card-text>
          <v-btn :color="item.color" variant="outlined"> Button </v-btn>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <br /><br />
    <p>dot에 이미지를 넣고 크기를 조절할 수 있다.</p>
    <v-timeline>
      <!-- avatar1 -->
      <v-timeline-item size="large">
        <template v-slot:icon>
          <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
        </template>
        <template v-slot:opposite>
          <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5"> Lorem ipsum </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
            scaevola imperdiet nec ut, sed euismod convenire principes at. Est
            et nobis iisque percipit, an vim zril disputando voluptatibus, vix
            an salutandi sententiae.</v-card-text
          >
        </v-card>
      </v-timeline-item>
      <!-- avatar2 -->
      <v-timeline-item size="small">
        <template v-slot:icon>
          <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
        </template>
        <template v-slot:opposite>
          <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h5"> Lorem ipsum </v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
            scaevola imperdiet nec ut, sed euismod convenire principes at. Est
            et nobis iisque percipit, an vim zril disputando voluptatibus, vix
            an salutandi sententiae.</v-card-text
          >
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-divider></v-divider>
    <v-timeline>
      <v-timeline-item>
        <template v-slot:opposite>2000</template>
        <v-card>
          <v-card-title>2000 Title</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus.</v-card-text
          >
        </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
        </template>
        <v-card>
          <v-card-title>2010 Title</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus.</v-card-text
          >
        </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>2020</template>
        <v-card>
          <v-card-title>2020 Title</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, no nam oblique veritus.</v-card-text
          >
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
interface itemType {
  id: number;
  color: string;
  icon: string;
}
const items: Array<itemType> = [
  {
    id: 1,
    color: "info",
    icon: "mdi-information",
  },
  {
    id: 2,
    color: "error",
    icon: "mdi-alert-circle",
  },
];
interface dotItemtype {
  color: string;
  icon: string;
  content: string;
}
const dotItems: Array<dotItemtype> = [
  {
    color: "red-lighten-2",
    icon: "mdi-star",
    content:
      "대한민국은 민주공화국이다. 모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다.",
  },
  {
    color: "purple-lighten-2",
    icon: "mdi-book-variant",
    content:
      "대법원장은 국회의 동의를 얻어 대통령이 임명한다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.",
  },
  {
    color: "green-lighten-1",
    icon: "mdi-airballoon",
    content:
      "모든 국민은 고문을 받지 아니하며, 형사상 자기에게 불리한 진술을 강요당하지 아니한다. 대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다. 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.",
  },
  {
    color: "indigo-lighten-2",
    icon: "mdi-buffer",
    content:
      "모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.",
  },
];
</script>

<style scoped></style>
