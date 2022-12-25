import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Watermark } from "antd";
import '../css/home.css';
const { Title, Paragraph } = Typography;

const Home = ({ userData }) => {
    return (
        <Watermark content="HFTTF BLOG!">
            <Container>
                <div className="containerDesign">
                    <Row className="justify-content-center">
                        <Col xs={12} md={6}>
                            {
                                userData ? 
                                <p> { userData.user.username }, Welcome to Blog!</p>
                                :
                                <></>
                            }
                        </Col>
                        <Col>
                            <Typography>
                                <Title>Blog Nedir ve Ne İşe Yarar?</Title>
                                <Paragraph>
                                    Blog herkes tarafından duyulan bir kelimedir. Web sitesi olarak bilinen bloglar, alt sayfa olarak bilinen site türleri değildir. Farklı makalelerin farklı konularda ele alınmasıyla oluşan bir sitedir. Blog sitelerin en önemli özelliği, özellikle içerikleri oluşturan yazarların yazdığı içerikleri birinci şahıs bakış açısıyla yazmasıdır. Kendi fikri ve düşüncelerini katarak yazılan yazıların tümüdür. Blog yazan kişiler her zaman belirli konularda kendi fikirlerini ve düşüncelerini yansıtarak yazının hazırlanmasını sağlar.
                                </Paragraph>
                                <Paragraph>
                                    İnternet ortamında yer alan bir blog sitesi, halka açık olarak görülen bir gazete gibidir. Herkes kendi fikrini paylaşabilir ve fikirleri savunabilir. Tamamen kişisel düşüncelere yer verilen bir ortamdır. Blog sitelerinin ne işe yaradığı insanların çok faezla merak ettiği bir konudur. Günümüze bakıldığında bloglar çok fazla gelişme gösteriyor. Çok fazla yaygın olarak popüler bir ortam haline gelmiştir. Blog siteleri sadece günlük olarak değil, çok fazla amaçla kullanılan bir web sitesi haline gelmiştir. Fakat blogların belirlenen herhangi bir sınırı yoktur. Bu özellik de oblog sitelerini web sitelerinden ayıran bir özelliktir.
                                </Paragraph>
                                <Title level={2}>Blog Nasıl Açılır ve Yazarlığı Nasıl Yapılır?</Title>
                                <Paragraph>
                                    Yazma işlemleri herkes tarafından yapılabilecek bir yetenek değildir. Zaman gerektiren bir iştir. Sürekli olarak blog yazmak, yazarların seviyesini yükseltecektir. Blog kişisel fikirlerin ön plana çıktığı bir içerik olduğundan, daha iyi bir şekilde yönlendirme yapılabilecektir. Her konu hakkında blog yazıları yazılabiliyor. Özellikle Yemek blogları yazan kişiler, bu bloglar hakkında bilgi sahibi olabileceğinden kendisi de daha iyi bir şekilde beslenebilir. Blog yazıları yazılırken yazara katılan çok fazla bilgi bulunur. Yazarlar bu konuda kendisini düşünerek, herkese fayda sağlayabilecek bir yazı çıkarmaya çalışır.
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Watermark>
    );
};

export default Home;