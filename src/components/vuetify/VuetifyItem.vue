<template>
  <div class="wrap">
    <h2>VuetifyItem</h2>
    <h3>선택 item BOX</h3>
    <p>하나의 선택만을 할 수 있다.</p>
    <v-item-group selected-class="bg-primary">
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                :class="['d-flex align-center', selectedClass]"
                dark
                height="200"
                @click="toggle"
              >
                <div class="text-h3 flex-grow-1 text-center">
                  {{ isSelected ? "Selected" : "Click Me!" }}
                </div></v-card
              ></v-item
            >
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <h3>멀티 선택</h3>
    <v-item-group selected-class="bg-primary" multiple>
      <v-container>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                :class="['d-flex align-center', selectedClass]"
                dark
                height="200"
                @click="toggle"
              >
                <div class="text-h3 flex-grow-1 text-center">
                  {{ isSelected ? "Selected" : "Click Me!" }}
                </div></v-card
              ></v-item
            >
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>
<!-- TODO 여기서 해볼 수 있는 것 들 
    1. 인스타그램 업데이트할 때 태그 모양 만들어 업데이트하는 화면
    2. 인스타그램 메인 페이지 하트 표기해보기
 -->
