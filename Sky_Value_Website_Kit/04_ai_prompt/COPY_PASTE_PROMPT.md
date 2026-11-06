# 別AIへそのまま渡すプロンプト

このZIPをプロジェクト素材として読み込み、Sky Value株式会社の日本語コーポレートサイトを構築してください。参考URL：https://demo.tcd-theme.com/tcd103/ 。参考サイトの「大きなフルワイド写真＋大胆な英字見出し＋余白＋スクロールで現れるセクション＋事業一覧＋会社情報＋ニュース」という視覚的な方向性を参考にし、コード、文章、画像、ロゴの無断コピーはしないでください。特定WordPressテーマのコード再現は不要です。

【技術】Next.js App Router + TypeScript + Tailwind CSS。モバイルファースト、アクセシブルなナビゲーション、WebP画像、Next/Image、SEOメタ情報、OG画像（既存ヒーローから生成）、サイトマップ、robots、構造化データ（Organization）、Lighthouseを意識した遅延読込。可能であれば画像の軽量化を実装。

【デザイン】01_brand/brand_tokens.json に従う。ヘッダーは透明からスクロール時白背景へ切り替え。モバイルメニューは開閉可能。FVは02_images/hero_city_large.webpを使用、別案としてhero_architecture_large.webp。写真には濃紺のグラデーションオーバーレイをかける。写真内に文字は含まれていないためHTMLテキストを重ねる。見出し：CONNECTING POSSIBILITIES. 日本語コピー：可能性をつなぎ、次の価値をつくる。

【ページ】/ (HOME), /about, /service, /service/communication, /service/business-support, /service/digital-marketing, /company, /news, /contact, /privacy。ニュースは初期0件で空状態を適切に表示。フォームは実送信を装わず、送信基盤が未設定なら明記。プライバシーポリシーは雛形として公開前確認を促す。

【内容】03_content/site_copy.mdを基準に制作。登記にある事業目的は事業の実績ではない。事業紹介は未確認・仮案のため編集箇所を分かりやすく記録。架空の取引実績、社員、代表メッセージ、顧客ロゴ、ニュース、数字、提携実績、レビュー、許認可を一切創作しない。写真はすべてAI生成のコンセプト画像で実際の職場や社員ではない。AIで生成した素材に実在人物の説明をつけない。

【アセット】01_brand/logo_primary.svgを通常ヘッダー、logo_white.svgを写真上ヘッダー、favicon.svgをファビコンとして使用。02_images のファイル名を対応するセクションに割当。ファイル名と用途は 02_images/IMAGE_MAP.md を参照。

【完了条件】全ページ実装、リンク切れなし、SP/PCレスポンシブ、編集可能な定数・データ、READMEに起動手順と公開前確認事項を記載。公開前確認事項には所在地・現代表者・事業内容・問い合わせ先・プライバシーポリシー・法務情報・各画像の扱いを含める。
