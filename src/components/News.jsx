import React from "react"
import { Select, Typography, Row, Col, Avatar, Card } from "antd"
import moment from "moment"
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"

const { Text, Title } = Typography
const { Option } = Select

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"

const News = ({ simplified }) => {
  const count = simplified ? 6 : 12
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  })
  console.log(cryptoNews)
  if (!cryptoNews?.value) return "Loading..."

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news) => (
        <Col xs={24} sm={12} lg={8} key={1}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="news thumbnail"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div className="">
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
