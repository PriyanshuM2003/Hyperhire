import { UserData } from '@/types/UserDataType';
import { NextRequest, NextResponse } from 'next/server';

const users: UserData[] = [
  {
    id: 1,
    name: 'Abhishek Gupta',
    profileImage:
      'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsmNkRgE~n4YOc2BJAu2SV1QbJuZ6gadfiEES~eSmm5dfta3l9KQjsTkvhQywQVE0B~kJ3Z03TVhxYC8W4Ie-MOyTkzYu-gMvVkToQFhmx5vIjHca1p35k5q394qjNoYyBpFieUl1-nCFqRHpyGmYWXpHUkP~IPO8MON4bXSdqtHrcn~PfoNGGTreQn6WxYiNlpz2wCEV1oMIXx8afbewo4XjX3jT7MTAR2cUtg6nPfw7rFlkuAJEb1JPno77yIZyzOZt9DxTCwXGwAO3x9Vw5AeEN9E62FFqyTiDUVyy7L6HWlZq~ZxQYlZ7pETSq6Qh2gJJWTZBfKoFEMcqHmZYQ__',
    countryImage:
      'https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLB3f5puRoARLraH36N3DN8dbShyd-aPXo4kzmNB2BewXnyKBg3HqSz7bm2zKgeQU7sjzJzgxteqS-x5YyjIHq7tIWIjAu09fQE8AFJ0AikoHOJHOytZbs4iZFaYcINXiBpi4nBnjipEkqYypga0~rdK0jtjWiPwpkVMebxFsMXFRURdivW7s~mtFsgqPt9X-ZDQXkYgv6mbUy1punmUz791NwjQ2cpXV4blG1uBTGlTXZhZw9iAW0~JcisNyUTLjcHu6C37H7yv7Nza7yY70~4WbbYFbSnjfpF1VURyFU8TVRhwOscjtW1m0XwYwpsdl0PD3oszllgvVnpkP6k70A__',
    title: '마케팅 - 2y',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 2,
    name: 'Jane Doe',
    profileImage:
      'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsmNkRgE~n4YOc2BJAu2SV1QbJuZ6gadfiEES~eSmm5dfta3l9KQjsTkvhQywQVE0B~kJ3Z03TVhxYC8W4Ie-MOyTkzYu-gMvVkToQFhmx5vIjHca1p35k5q394qjNoYyBpFieUl1-nCFqRHpyGmYWXpHUkP~IPO8MON4bXSdqtHrcn~PfoNGGTreQn6WxYiNlpz2wCEV1oMIXx8afbewo4XjX3jT7MTAR2cUtg6nPfw7rFlkuAJEb1JPno77yIZyzOZt9DxTCwXGwAO3x9Vw5AeEN9E62FFqyTiDUVyy7L6HWlZq~ZxQYlZ7pETSq6Qh2gJJWTZBfKoFEMcqHmZYQ__',
    countryImage:
      'https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLB3f5puRoARLraH36N3DN8dbShyd-aPXo4kzmNB2BewXnyKBg3HqSz7bm2zKgeQU7sjzJzgxteqS-x5YyjIHq7tIWIjAu09fQE8AFJ0AikoHOJHOytZbs4iZFaYcINXiBpi4nBnjipEkqYypga0~rdK0jtjWiPwpkVMebxFsMXFRURdivW7s~mtFsgqPt9X-ZDQXkYgv6mbUy1punmUz791NwjQ2cpXV4blG1uBTGlTXZhZw9iAW0~JcisNyUTLjcHu6C37H7yv7Nza7yY70~4WbbYFbSnjfpF1VURyFU8TVRhwOscjtW1m0XwYwpsdl0PD3oszllgvVnpkP6k70A__',
    title: '디자이너 - 3y',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 3,
    name: 'Abhishek Doe',
    profileImage:
      'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsmNkRgE~n4YOc2BJAu2SV1QbJuZ6gadfiEES~eSmm5dfta3l9KQjsTkvhQywQVE0B~kJ3Z03TVhxYC8W4Ie-MOyTkzYu-gMvVkToQFhmx5vIjHca1p35k5q394qjNoYyBpFieUl1-nCFqRHpyGmYWXpHUkP~IPO8MON4bXSdqtHrcn~PfoNGGTreQn6WxYiNlpz2wCEV1oMIXx8afbewo4XjX3jT7MTAR2cUtg6nPfw7rFlkuAJEb1JPno77yIZyzOZt9DxTCwXGwAO3x9Vw5AeEN9E62FFqyTiDUVyy7L6HWlZq~ZxQYlZ7pETSq6Qh2gJJWTZBfKoFEMcqHmZYQ__',
    countryImage:
      'https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLB3f5puRoARLraH36N3DN8dbShyd-aPXo4kzmNB2BewXnyKBg3HqSz7bm2zKgeQU7sjzJzgxteqS-x5YyjIHq7tIWIjAu09fQE8AFJ0AikoHOJHOytZbs4iZFaYcINXiBpi4nBnjipEkqYypga0~rdK0jtjWiPwpkVMebxFsMXFRURdivW7s~mtFsgqPt9X-ZDQXkYgv6mbUy1punmUz791NwjQ2cpXV4blG1uBTGlTXZhZw9iAW0~JcisNyUTLjcHu6C37H7yv7Nza7yY70~4WbbYFbSnjfpF1VURyFU8TVRhwOscjtW1m0XwYwpsdl0PD3oszllgvVnpkP6k70A__',
    title: '디자이너 - 3y',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 4,
    name: 'Abhishek Doe',
    profileImage:
      'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsmNkRgE~n4YOc2BJAu2SV1QbJuZ6gadfiEES~eSmm5dfta3l9KQjsTkvhQywQVE0B~kJ3Z03TVhxYC8W4Ie-MOyTkzYu-gMvVkToQFhmx5vIjHca1p35k5q394qjNoYyBpFieUl1-nCFqRHpyGmYWXpHUkP~IPO8MON4bXSdqtHrcn~PfoNGGTreQn6WxYiNlpz2wCEV1oMIXx8afbewo4XjX3jT7MTAR2cUtg6nPfw7rFlkuAJEb1JPno77yIZyzOZt9DxTCwXGwAO3x9Vw5AeEN9E62FFqyTiDUVyy7L6HWlZq~ZxQYlZ7pETSq6Qh2gJJWTZBfKoFEMcqHmZYQ__',
    countryImage:
      'https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLB3f5puRoARLraH36N3DN8dbShyd-aPXo4kzmNB2BewXnyKBg3HqSz7bm2zKgeQU7sjzJzgxteqS-x5YyjIHq7tIWIjAu09fQE8AFJ0AikoHOJHOytZbs4iZFaYcINXiBpi4nBnjipEkqYypga0~rdK0jtjWiPwpkVMebxFsMXFRURdivW7s~mtFsgqPt9X-ZDQXkYgv6mbUy1punmUz791NwjQ2cpXV4blG1uBTGlTXZhZw9iAW0~JcisNyUTLjcHu6C37H7yv7Nza7yY70~4WbbYFbSnjfpF1VURyFU8TVRhwOscjtW1m0XwYwpsdl0PD3oszllgvVnpkP6k70A__',
    title: '디자이너 - 3y',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 5,
    name: 'Abhishek Doe',
    profileImage:
      'https://s3-alpha-sig.figma.com/img/e223/2669/f5acc1421ab983285005f3855fea261f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsmNkRgE~n4YOc2BJAu2SV1QbJuZ6gadfiEES~eSmm5dfta3l9KQjsTkvhQywQVE0B~kJ3Z03TVhxYC8W4Ie-MOyTkzYu-gMvVkToQFhmx5vIjHca1p35k5q394qjNoYyBpFieUl1-nCFqRHpyGmYWXpHUkP~IPO8MON4bXSdqtHrcn~PfoNGGTreQn6WxYiNlpz2wCEV1oMIXx8afbewo4XjX3jT7MTAR2cUtg6nPfw7rFlkuAJEb1JPno77yIZyzOZt9DxTCwXGwAO3x9Vw5AeEN9E62FFqyTiDUVyy7L6HWlZq~ZxQYlZ7pETSq6Qh2gJJWTZBfKoFEMcqHmZYQ__',
    countryImage:
      'https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLB3f5puRoARLraH36N3DN8dbShyd-aPXo4kzmNB2BewXnyKBg3HqSz7bm2zKgeQU7sjzJzgxteqS-x5YyjIHq7tIWIjAu09fQE8AFJ0AikoHOJHOytZbs4iZFaYcINXiBpi4nBnjipEkqYypga0~rdK0jtjWiPwpkVMebxFsMXFRURdivW7s~mtFsgqPt9X-ZDQXkYgv6mbUy1punmUz791NwjQ2cpXV4blG1uBTGlTXZhZw9iAW0~JcisNyUTLjcHu6C37H7yv7Nza7yY70~4WbbYFbSnjfpF1VURyFU8TVRhwOscjtW1m0XwYwpsdl0PD3oszllgvVnpkP6k70A__',
    title: '디자이너 - 3y',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
];

export async function GET(req: NextRequest) {
  console.log('API Request received at /api/userData');
  return NextResponse.json(users);
}
