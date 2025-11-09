import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const bouquets = [
  {
    id: 1,
    name: 'Нежность утра',
    price: '3 500 ₽',
    image: 'https://cdn.poehali.dev/projects/3ed90351-0b6b-4877-84fe-c1cb7794e247/files/fcb950fe-cda9-49d2-a871-8525ae1d3987.jpg',
  },
  {
    id: 2,
    name: 'Романтика',
    price: '4 200 ₽',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    name: 'Весенний сад',
    price: '3 800 ₽',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    name: 'Лавандовый сон',
    price: '4 500 ₽',
    image: 'https://cdn.poehali.dev/projects/3ed90351-0b6b-4877-84fe-c1cb7794e247/files/becbe18c-e6c2-494e-b4f1-1ff601dfe77d.jpg',
  },
  {
    id: 5,
    name: 'Персиковый шарм',
    price: '3 900 ₽',
    image: 'https://cdn.poehali.dev/projects/3ed90351-0b6b-4877-84fe-c1cb7794e247/files/656fe6c8-d3dd-4c31-83e8-37457daf793e.jpg',
  },
  {
    id: 6,
    name: 'Элегантность',
    price: '5 200 ₽',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Анна Петрова',
    text: 'Потрясающие букеты! Цветы всегда свежие, а композиции такие нежные и стильные. Заказываю только здесь.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    text: 'Быстрая доставка и внимательное отношение. Девушка была в восторге от букета!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Мария Иванова',
    text: 'Уникальный подход к каждому заказу. Флористы настоящие художники!',
    rating: 5,
  },
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink via-lavender to-mint">
      <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flower2" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">Флора</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">
                Каталог
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="tel:+79991234567" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 123-45-67</span>
              </a>
              <Button size="sm" className="rounded-full">
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Ваш идеальный букет
                <span className="block text-primary">с доставкой</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Создаём уникальные цветочные композиции, которые рождаются вдохновением
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <a href="#catalog">Выбрать букет</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 glass">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="glass-card p-8 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1518707399486-6d702a84ff00?w=800&h=1000&fit=crop"
                  alt="Букет цветов"
                  className="rounded-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-lavender rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Sparkles', title: 'Свежие цветы', desc: 'Ежедневная поставка' },
              { icon: 'Heart', title: 'Индивидуальный подход', desc: 'К каждому клиенту' },
              { icon: 'Truck', title: 'Быстрая доставка', desc: 'По всему городу' },
              { icon: 'Award', title: 'Уникальные композиции', desc: 'От наших флористов' },
            ].map((item, index) => (
              <Card
                key={index}
                className="glass-card border-none hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Наши коллекции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый букет создан с любовью и вниманием к деталям
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bouquets.map((bouquet, index) => (
              <Card
                key={bouquet.id}
                className="glass-card border-none group hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{bouquet.name}</h3>
                    <p className="text-2xl font-bold text-primary">{bouquet.price}</p>
                  </div>
                  <Button className="w-full rounded-full" variant="outline">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card p-12 max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Наша история</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы создаём уникальные цветочные композиции уже более 10 лет. Каждый букет — это произведение
              искусства, созданное с любовью и вниманием к деталям. Мы работаем только со свежими цветами от
              проверенных поставщиков и гарантируем качество каждого заказа. Наша команда профессиональных
              флористов готова воплотить в жизнь любые ваши пожелания.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">лет опыта</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5000+</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">свежие цветы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Что говорят наши клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="glass-card border-none">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Ваше имя</label>
                  <Input
                    placeholder="Анна"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Телефон</label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="glass"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите, какой букет вы хотите..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="glass min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Контактная информация</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+79991234567"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <span>+7 (999) 123-45-67</span>
                    </a>
                    <a
                      href="mailto:info@flora.ru"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <span>info@flora.ru</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <span>Москва, ул. Цветочная, 15</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Режим работы</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Пн-Пт: 9:00 - 21:00</p>
                    <p>Сб-Вс: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 glass-card mx-4 mb-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Flower2" size={32} className="text-primary" />
                <span className="text-2xl font-bold text-primary">Флора</span>
              </div>
              <p className="text-muted-foreground">
                Создаём уникальные цветочные композиции с 2014 года
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Навигация</h4>
              <nav className="flex flex-col gap-2">
                <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Каталог
                </a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
                <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Социальные сети</h4>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Icon name={social as any} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 Флора. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}