<template>
  <div class="wrap">
    <h2>Tabs</h2>
    <p>탭기능을 통해 탭별 페이지를 나누어 보여줄 수 있다.</p>
    <v-card>
      <v-tabs v-model="tab1">
        <v-tab value="one">Item One</v-tab>
        <v-tab value="two">Item Two</v-tab>
        <v-tab value="three">Item Three</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab1">
          <v-window-item value="one">One</v-window-item>
          <v-window-item value="two">Two</v-window-item>
          <v-window-item value="three">Three</v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <br /><br />
    <p>for문을 활용한 탭기능</p>
    <v-card>
      <v-toolbar color="primary">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Your Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs v-model="tab2">
            <v-tab v-for="tab in tab2List" :key="tab" :value="tab">{{
              tab
            }}</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-window v-model="tab2">
        <v-window-item v-for="(item, i) in tab2List" :key="item" :value="item">
          <v-card-text>{{ tab2Items[i] }}</v-card-text>
        </v-window-item>
      </v-window>
    </v-card>
    <br /><br />
    <p>선택한 탭을 중앙으로 정렬하고, 화살표를 지정할 수 있다.</p>
    <v-card>
      <v-tabs
        center-active
        background-color="indigo"
        next-icon="mdi-arrow-right-bold-hexagon-outline"
        prev-icon="mdi-arrow-left-bold-hexagon-outline"
        show-arrows
      >
        <v-tab v-for="n in 20" :key="n">{{ n }}</v-tab>
      </v-tabs>
    </v-card>
    <br /><br />
    <p>세로로 tab을 넣을 수 있다.</p>
    <v-card>
      <div class="d-flex flex-row">
        <v-tabs direction="vertical" v-model="tab3" grow>
          <v-tab
            v-for="(item, i) in tab3Lists"
            :key="i"
            :value="`option-${i + 1}`"
          >
            <v-icon class="mr-2">{{ item.icon }}</v-icon>
            {{ item.name }}
          </v-tab>
        </v-tabs>
        <v-window v-model="tab3">
          <v-window-item value="option-1">
            <v-card flat>
              <v-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                  Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                  non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
                  nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                  Pellentesque libero tortor, tincidunt et, tincidunt eget,
                  semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-2">
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                  aliquam libero, non adipiscing dolor urna a orci. Curabitur
                  ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et
                  pellentesque egestas, lacus ante convallis tellus, vitae
                  iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                  felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero. Nam commodo suscipit
                  quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
                  tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius
                  tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                  fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede.
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                  dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-3">
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque
                  facilisis. Nam eget dui. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In dui magna, posuere eget, vestibulum et,
                  tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque
                  facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                  ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
    <h2>Theme</h2>
    <v-theme-provider theme="dark" with-background class="pa-10">
      <v-card title="Title" subtitle="Subtitle"></v-card>
    </v-theme-provider>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tab1 = ref<string | null>(null);
const tab2 = ref<string | null>(null);
const tab3 = ref<string | null>(null);
const tab2List: Array<string> = ["web", "shopping", "videos", "images", "news"];
const tab2Items: Array<string> = [
  "이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다. 헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
  "모든 국민은 학문과 예술의 자유를 가진다. 언론·출판은 타인의 명예나 권리 또는 공중도덕이나 사회윤리를 침해하여서는 아니된다. 언론·출판이 타인의 명예나 권리를 침해한 때에는 피해자는 이에 대한 피해의 배상을 청구할 수 있다.",
  "환경권의 내용과 행사에 관하여는 법률로 정한다. 국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.",
  "국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국토와 자원은 국가의 보호를 받으며, 국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다.",
  "평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다.",
];
interface tab3TitleType {
  icon: string;
  name: string;
}
const tab3Lists: Array<tab3TitleType> = [
  { icon: "mdi-balloon", name: "OPTION1" },
  { icon: "mdi-calendar", name: "OPTION2" },
  { icon: "mdi-clock-fast", name: "OPTION3" },
];
</script>

<style scoped></style>
