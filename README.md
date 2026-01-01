# 로켓콜 프랜차이즈 랜딩페이지

프랜차이즈 상담 신청을 위한 랜딩페이지입니다.

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- Supabase (Database)

## 배포 방법 (Vercel)

### 1. Vercel 연결

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 `rocket-call-franchise` 선택
4. "Import" 클릭

### 2. 환경변수 설정

Vercel 프로젝트 설정에서 다음 환경변수를 추가하세요:

| 변수명 | 설명 |
|--------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Anonymous Key |

### 3. Supabase 테이블 생성

Supabase SQL Editor에서 다음 쿼리를 실행하세요:

```sql
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);

-- RLS 활성화
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- 정책 설정 (필요에 따라 수정)
CREATE POLICY "Enable all access" ON submissions FOR ALL USING (true);
```

### 4. 배포 완료

"Deploy" 버튼을 클릭하면 자동으로 배포됩니다.

## 로컬 개발

```bash
npm install
npm run dev
```

## 페이지 구성

- `/` - 메인 랜딩페이지
- `/admin` - 관리자 페이지 (문의 관리)
