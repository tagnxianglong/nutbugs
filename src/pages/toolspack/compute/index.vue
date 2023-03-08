<template>
  <view>
    <nut-cell>
      <nut-row>
        <nut-col :span="12">
          <view>模式:{{ gameData.gameNbrIndex }}位数{{ gameData.gameSwName }}</view>
        </nut-col>
        <nut-col :span="12">
          <view
            >{{ gameData.nowIndex }}/{{ gameData.total }} 正确率:{{ gameData.zql }}%</view
          >
        </nut-col>
        <nut-col :span="7">
          <view class="flex-content">{{ computData.nbr1 }}</view>
        </nut-col>
        <nut-col :span="1">
          <view class="flex-content" v-if="computData.computChart == '0'">
            <IconFont font-class-name="iconfont" class-prefix="icon" name="jiahao" size="1rem"/>
          </view>
          <view class="flex-content" v-if="computData.computChart == '1'">
            <IconFont font-class-name="iconfont" class-prefix="icon" name="jianhao" size="1rem"/>
          </view>
          <view class="flex-content" v-if="computData.computChart == '2'">
            <IconFont font-class-name="iconfont" class-prefix="icon" name="chenghao" size="1rem" />
          </view>
          <view class="flex-content" v-if="computData.computChart == '3'">
            <IconFont font-class-name="iconfont" class-prefix="icon" name="chengbeifen" size="1rem" />
          </view>
        </nut-col>
        <nut-col :span="7">
          <view class="flex-content">{{ computData.nbr2 }}</view>
        </nut-col>
        <nut-col :span="1">
          <view class="flex-content" v-if="computData.isSuccess">{{
            computData.answerChart
          }}</view>
          <view class="flex-content read" v-else>{{ computData.answerChart }}</view>
        </nut-col>
        <nut-col :span="8">
          <view class="flex-content" v-if="computData.isSuccess">{{
            computData.result
          }}</view>
          <view class="flex-content read" v-else>{{ computData.result }}</view>
        </nut-col>
        <nut-col :span="12">
          <view>计时:{{ gameData.timeNbr }}</view>
        </nut-col>
        <nut-col :span="12" style="text-align: right">
          <view
            ><nut-countdown
              :endTime="gameData.end"
              millisecond
              format="ss:SS"
              @on-end="onCountdownEnd"
          /></view>
        </nut-col>
      </nut-row>
    </nut-cell>
  </view>
  <nut-popup
    position="bottom"
    round
    :visible="true"
    :close-on-click-overlay="false"
    :overlay="false"
  >
    <view class="keyBord">
      <nut-row :gutter="5">
        <nut-col :span="8"
          ><nut-button type="success" block @click="onModeSw(gameData.gameSwIndex)"
            >模式</nut-button
          ></nut-col
        >
        <nut-col :span="8"
          ><nut-button type="success" block @click="onNbrSw(gameData.gameNbrIndex)"
            >位数</nut-button
          ></nut-col
        >
        <nut-col :span="8"
          ><nut-button type="success" block @click="onTimeSw(gameData.timeNbr)"
            >定时</nut-button
          ></nut-col
        >
      </nut-row>
      <nut-row :gutter="5">
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('1')"
            ><view class="key">1</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('2')"
            ><view class="key">2</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('3')"
            ><view class="key">3</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('>')"
            ><view class="key">></view></nut-button
          ></nut-col
        >
      </nut-row>
      <nut-row :gutter="5">
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('4')"
            ><view class="key">4</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('5')"
            ><view class="key">5</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('6')"
            ><view class="key">6</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('<')"
            ><view class="key">&lt;</view></nut-button
          ></nut-col
        >
      </nut-row>
      <nut-row :gutter="5">
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('7')"
            ><view class="key">7</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('8')"
            ><view class="key">8</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('9')"
            ><view class="key">9</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('0')"
            ><view class="key">0</view></nut-button
          ></nut-col
        >
      </nut-row>
      <nut-row :gutter="5">
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('.')"
            ><view class="key">.</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="buttonClick('=')"
            ><view class="key">=</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button color="#ffffff" block @click="delClick()"
            ><view class="key">del</view></nut-button
          ></nut-col
        >
        <nut-col :span="6"
          ><nut-button type="primary" block @click="okClick()">{{
            okButtonName
          }}</nut-button></nut-col
        >
      </nut-row>
    </view>
  </nut-popup>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { IconFont } from "@nutui/icons-vue-taro";

const gameData = reactive({
  gameSwIndex: 0,
  gameSwName: "加减法",
  gameNbrIndex: 1,
  timeNbr: 30,
  zql: 100,
  end: Date.now(),
  isStart: false,
  nowIndex: 0,
  successNbr: 0,
  errNbr: 0,
  total: 50,
});
const reset = () => {
  gameData.zql = 100;
  gameData.isStart = false;
  gameData.nowIndex = 0;
  gameData.successNbr = 0;
  gameData.errNbr = 0;
  okButtonName.value = "开始";
  gameData.isStart = false;
  gameDataList = [];
};
const computData = ref({
  nbr1: 888,
  nbr2: 888,
  computChart: "",
  result: "888",
  answer: "888",
  answerChart: "=",
  isSuccess: true,
});
const onModeSw = (index) => {
  reset();
  if (index == 0) {
    gameData.gameSwIndex = 1;
    gameData.gameSwName = "乘除法";
    computData.value.computChart = "X";
  }
  if (index == 1) {
    gameData.gameSwIndex = 2;
    gameData.gameSwName = "混合运算";
  }
  if (index == 2) {
    gameData.gameSwIndex = 3;
    gameData.gameSwName = "比大小";
  }
  if (index == 3) {
    gameData.gameSwIndex = 0;
    gameData.gameSwName = "加减法";
    computData.value.computChart = "+";
  }
};
const onNbrSw = (index) => {
  reset();
  if (index == 1) {
    gameData.gameNbrIndex = 2;
  }
  if (index == 2) {
    gameData.gameNbrIndex = 3;
  }
  if (index == 3) {
    gameData.gameNbrIndex = 1;
  }
};
const onTimeSw = (index) => {
  reset();
  if (index == 30) {
    gameData.timeNbr = 5;
  }
  if (index == 5) {
    gameData.timeNbr = 10;
  }
  if (index == 10) {
    gameData.timeNbr = 20;
  }
  if (index == 20) {
    gameData.timeNbr = 30;
  }
};

const delClick = () => {
  if (gameData.gameSwIndex == 2) {
    computData.value.answerChart = "";
  } else {
    computData.value.result = "";
  }
};
//------start--➗
let gameDataList: Array<{}> = [];
const init = () => {
  for (let i = 0; i < gameData.total; i++) {
    gameDataList.push(init_plush_x());
  }
};
const init_plush_x = () => {
  return {
    nbr1: 0,
    nbr2: 0,
    computChart: init_Chart(),
    result: "",
    answer: 0,
    answerChart: "=",
    isSuccess: true,
  };
};

const init_nbr = (nbr?) => {
  if (nbr) {
    return Math.floor(Math.random() * 100);
  }
  if (gameData.gameNbrIndex == 1) {
    return Math.floor(Math.random() * 10);
  } else if (gameData.gameNbrIndex == 2) {
    return Math.floor(Math.random() * 100);
  } else {
    return Math.floor(Math.random() * 1000);
  }
};
const init_Chart = () => {
  let i = Math.floor(Math.random() * 10);
  if (gameData.gameSwIndex == 2) {
    if (i % 4 == 0) {
      return "0";
    } else if (i % 4 == 1) {
      return "1";
    } else if (i % 4 == 2) {
      return "2";
    } else {
      return "3";
    }
  } else {
    if (i % 2 == 0) {
      if (gameData.gameSwIndex == 0) return "0";
      if (gameData.gameSwIndex == 1) return "2";
    } else {
      if (gameData.gameSwIndex == 0) return "1";
      if (gameData.gameSwIndex == 1) return "3";
    }
  }

  return "0";
};

const startGame = () => {
  init();
  next();
};
const next = () => {
  computData.value = gameDataList[gameData.nowIndex] as any;
  gameData.nowIndex++;
  let a = init_nbr();
  let b = init_nbr();
  if (computData.value.computChart === "0") {
    computData.value.nbr1 = a;
    computData.value.nbr2 = b;
    computData.value.answer = +a + b + "";
  }
  if (computData.value.computChart === "1") {
    if (a > b) {
      computData.value.nbr1 = a;
      computData.value.nbr2 = b;
      computData.value.answer = a - b + "";
    } else {
      computData.value.nbr1 = b;
      computData.value.nbr2 = a;
      computData.value.answer = b - a + "";
    }
  }
  if (computData.value.computChart === "2") {
    computData.value.nbr1 = a;
    computData.value.nbr2 = b;
    computData.value.answer = a * b + "";
  }
  if (computData.value.computChart === "3") {
    let c = a * b;
    computData.value.nbr1 = c;
    computData.value.nbr2 = a;
    computData.value.answer = b + "";
  }
  if (gameData.gameSwIndex == 3) {
    let d = +computData.value.answer;
    let e = init_nbr(2);
    computData.value.result = e + "";
    computData.value.answerChart = "";
    if (d == e) {
      computData.value.answer = "=";
    }
    if (d > e) {
      computData.value.answer = ">";
    } else {
      computData.value.answer = "<";
    }
  }
  gameData.end = Date.now() + gameData.timeNbr * 1000;
};
const onNextOk = () => {
  console.log("answer+=" + computData.value.answer);
  if (gameData.gameSwIndex == 3) {
    console.log("answerChart+=" + computData.value.answerChart);
    if (computData.value.answer == computData.value.answerChart) {
      gameData.successNbr++;
      hasNext();
    } else {
      computData.value.isSuccess = false;
      gameData.errNbr++;
      computData.value.answerChart += `[${computData.value.answer}]`;
      setTimeout(() => {
        hasNext();
      }, 2000);
    }
  } else {
    console.log("result+=" + computData.value.result);
    if (computData.value.result == computData.value.answer) {
      gameData.successNbr++;
      hasNext();
    } else {
      computData.value.isSuccess = false;
      gameData.errNbr++;
      computData.value.result += `[${computData.value.answer}]`;
      setTimeout(() => {
        hasNext();
      }, 2000);
    }
  }
};
const hasNext = () => {
  gameData.zql = ((gameData.total - gameData.errNbr) / gameData.total) * 100;
  if (gameData.nowIndex == gameData.total) {
    okButtonName.value = "开始";
    gameData.isStart = false;
    return;
  }
  next();
};

//------end

const okButtonName = ref("开始");
const okClick = () => {
  if (okButtonName.value == "OK") {
    onNextOk();
  } else {
    okButtonName.value = "OK";
    gameData.isStart = true;
    startGame();
  }
};
const buttonClick = (event) => {
  if (gameData.gameSwIndex == 3) {
    if (event < 10 || event === ".") {
      return;
    } else computData.value.answerChart = event;
  } else {
    if (event < 10 || event === ".") computData.value.result += event + "";
  }
};
const onCountdownEnd = () => {
  if (gameData.isStart) {
    computData.value.isSuccess = false;
    gameData.errNbr++;
    hasNext();
  }
};
</script>
<script lang="ts">
export default definePageConfig({
  navigationBarTitleText: "启蒙计算",
  navigationBarBackgroundColor: "#fa2c19",
});
</script>

<style lang="scss">
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 5px;
  }
  margin-bottom: 5px;
}
.flex-content {
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.keyBord {
  background-color: rgb(217, 217, 217);
  color: #ffffff;
  padding: 10px 10px;
}
.key {
  color: #090909;
}
.read {
  color: #f20808;
}
</style>
