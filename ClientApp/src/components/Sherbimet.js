import React, { Component, Fragment } from 'react';
import './sherbimet.css';
import FooterPage from './footer';
import { Helmet } from 'react-helmet';

export class Sherbimet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endokrinologjiOpen: false, //per secilen duhesh qeshtu (mos harro , mas seciles)
            gjinekologjiOpen: false,
            alergologjiOpen: false,
            anesteziologjiaOpen: false,
            checkupOpen: false,
            dermatologjiOpen: false,
            gastroenterologjiOpen: false,
            hematologjiOpen: false,
            invitroOpen: false,
            kardiokirurgjiOpen: false,
            kardiologjiOpen: false,
            pediatriOpen: false,
            laboratorOpen: false,
            kirurgjiOpen: false,
            kirurgjiPlastikeOpen: false,
            nefrologjiOpen: false,
            neurologjiOpen: false,
            neuroKirurgjiOpen: false,
            okulistikOpen: false,
            orlOpen: false,
            onkologjiOpen: false,
            pneumologjiOpen: false,
            urologjiOpen: false,
            reumatologjiOpen: false,
            urgjencaOpen: false,
            proktologjiOpen: false,
            sallatelindjesOpen: false,
            qendraedializesOpen: false,
            

        };
        this.toggleEndikronologjiCollapse = this.toggleEndikronologjiCollapse.bind(this);//secilen duhesh qeshtu njejt veq ja ndrron emrat
        this.toggleGjinekologjiCollapse = this.toggleGjinekologjiCollapse.bind(this);
        this.toggleAlergologjiCollapse = this.toggleAlergologjiCollapse.bind(this);
        this.toggleAnesteziologjiaCollapse = this.toggleAnesteziologjiaCollapse.bind(this);
        this.toggleCheckupCollapse = this.toggleCheckupCollapse.bind(this);
        this.toggleDermatologjiCollapse = this.toggleDermatologjiCollapse.bind(this);
        this.toggleGastroenterologjiCollapse = this.toggleGastroenterologjiCollapse.bind(this);
        this.toggleHematologjiCollapse = this.toggleHematologjiCollapse.bind(this);
        this.toggleInvitroCollapse = this.toggleInvitroCollapse.bind(this);
        this.toggleKardiokirurgjiCollapse = this.toggleKardiokirurgjiCollapse.bind(this);
        this.toggleKardiologjiCollapse = this.toggleKardiologjiCollapse.bind(this);
        this.togglePediatriCollapse = this.togglePediatriCollapse.bind(this);
        this.toggleLaboratorCollapse = this.toggleLaboratorCollapse.bind(this);
        this.toggleKirurgjiCollapse = this.toggleKirurgjiCollapse.bind(this);
        this.toggleKirurgjiPlastikeCollapse = this.toggleKirurgjiPlastikeCollapse.bind(this);
        this.toggleNefrologjiCollapse = this.toggleNefrologjiCollapse.bind(this);
        this.toggleNeurologjiCollapse = this.toggleNeurologjiCollapse.bind(this);
        this.toggleNeurokirurgjiCollapse = this.toggleNeurokirurgjiCollapse.bind(this);
        this.toggleOkulistikCollapse = this.toggleOkulistikCollapse.bind(this);
        this.toggleOrlCollapse = this.toggleOrlCollapse.bind(this);
        this.toggleOnkologjiCollapse = this.toggleOnkologjiCollapse.bind(this);
        this.togglePneumologjiCollapse = this.togglePneumologjiCollapse.bind(this);
        this.toggleUrologjiCollapse = this.toggleUrologjiCollapse.bind(this);
        this.toggleReumatologjiCollapse = this.toggleReumatologjiCollapse.bind(this);
        this.toggleUrgjencaCollapse = this.toggleUrgjencaCollapse.bind(this);
        this.toggleProktologjiCollapse = this.toggleProktologjiCollapse.bind(this);
        this.toggleSallatCollapse = this.toggleSallatCollapse.bind(this);
        this.toggleQendraedializesCollapse = this.toggleQendraedializesCollapse.bind(this);

    }

    toggleEndikronologjiCollapse() {
        this.setState({ endokrinologjiOpen: !this.state.endokrinologjiOpen }); 
    }

    toggleGjinekologjiCollapse() {
        this.setState({ gjinekologjiOpen: !this.state.gjinekologjiOpen });
    }

    toggleAlergologjiCollapse() {
        this.setState({ alergologjiOpen: !this.state.alergologjiOpen });
    }
    toggleAnesteziologjiaCollapse() {
        this.setState({ anesteziologjiaOpen: !this.state.anesteziologjiaOpen });
    }
    toggleCheckupCollapse() {
        this.setState({ checkupOpen: !this.state.checkupOpen });
    }
    toggleDermatologjiCollapse() {
        this.setState({ dermatologjiOpen: !this.state.dermatologjiOpen });
    }
    toggleGastroenterologjiCollapse() {
        this.setState({ gastroenterologjiOpen: !this.state.gastroenterologjiOpen });
    }
    toggleHematologjiCollapse() {
        this.setState({ hematologjiOpen: !this.state.hematologjiOpen });
    }
    toggleInvitroCollapse() {
        this.setState({ invitroOpen: !this.state.invitroOpen });
    }
    toggleKardiokirurgjiCollapse() {
        this.setState({ kardiokirurgjiOpen: !this.state.kardiokirurgjiOpen });
    }

    toggleKardiologjiCollapse() {
        this.setState({ kardiologjiOpen: !this.state.kardiologjiOpen });
    }
    togglePediatriCollapse() {
        this.setState({ pediatriOpen: !this.state.pediatriOpen });
    }
    toggleLaboratorCollapse() {
        this.setState({ laboratorOpen: !this.state.laboratorOpen });
    }
    toggleKirurgjiCollapse() {
        this.setState({ kirurgjiOpen: !this.state.kirurgjiOpen });
    }
    toggleKirurgjiPlastikeCollapse() {
        this.setState({ kirurgjiPlastikeOpen: !this.state.kirurgjiPlastikeOpen });
    }
    toggleNefrologjiCollapse() {
        this.setState({ nefrologjiOpen: !this.state.nefrologjiOpen });
    }
    toggleNeurologjiCollapse() {
        this.setState({ neurologjiOpen: !this.state.neurologjiOpen });
    }
    toggleNeurokirurgjiCollapse() {
        this.setState({ neuroKirurgjiOpen: !this.state.neuroKirurgjiOpen });
    }
    toggleOkulistikCollapse() {
        this.setState({ okulistikOpen: !this.state.okulistikOpen });
    }
    toggleOrlCollapse() {
        this.setState({ orlOpen: !this.state.orlOpen });
    }
    toggleOnkologjiCollapse() {
        this.setState({ onkologjiOpen: !this.state.onkologjiOpen });
    }
    togglePneumologjiCollapse() {
        this.setState({ pneumologjiOpen: !this.state.pneumologjiOpen });
    }
    toggleUrologjiCollapse() {
        this.setState({ urologjiOpen: !this.state.urologjiOpen });
    }
    toggleReumatologjiCollapse() {
        this.setState({ reumatologjiOpen: !this.state.reumatologjiOpen });
    }
    toggleUrgjencaCollapse() {
        this.setState({ urgjencaOpen: !this.state.urgjencaOpen });
    }
    toggleProktologjiCollapse() {
        this.setState({ proktologjiOpen: !this.state.proktologjiOpen });
    }
    toggleSallatCollapse() {
        this.setState({ sallatelindjesOpen: !this.state.sallatelindjesOpen });
    }
    toggleQendraedializesCollapse() {
        this.setState({ qendraedializesOpen: !this.state.qendraedializesOpen });
    }




        render() {

        return (
            <Fragment>

                <Helmet>
                <title>Services - SunriseCare Hospital</title>
                </Helmet>
                <div className='sherbimet-container'>
                    <h1>SHERBIMET MJEKESORE</h1>
                </div>


                <div className='slider-sherbimet'>
                </div>


                <div className='h1'>
                    <h1>Caring for you, every step of the way.</h1>
                </div>

                <div className='wrapper'>
                    <div className='row'>
                        <div className='image-section'>
                            <img src="about.jpg"></img>

                        </div>

                        <div className='content-sherbimet'>
                            <h1>Sherbimet</h1>
                            <h2>Our Hospital</h2>
                            <p>Sherbimet ne spitalin tone jane te rendesishme per shendetin dhe mireqenien e pacienteve tane.
                                Spitali yne eshte i perkushtuar per ofrimin e kujdesit shendetesor cilesor dhe per te permiresuar sherbimet tona me teknologjine
                                dhe pajisjet me te fundit, si dhe me stafin mjekesor te trajnuar dhe te kualifikuar.
                                Sherbimet ne spitalin tone perfshijne trajtimin emergjent te semundjeve dhe lendimeve akute, diagnozen dhe trajtimin e semundjeve te ndryshme, kujdesin per pacientet ne kujdesin intensiv, rehabilitimin, kujdesin palliativ dhe sherbimet kirurgjikale. Spitali yne gjithashtu ofron sherbime te specializuara per te trajtuar semundje dhe gjendje te caktuara shendetesore, sic jane kardiologjia, neorologjia, onkologjia dhe ortopedia.

                            </p>
                        </div>

                    </div>
                </div>

                <div className='flexbox-sherbimet'>
                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="endocrinology.jpeg" alt="Endokrinologji"></img>
                        </div>
                        <p className='title'>Endrokrinologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleEndikronologjiCollapse}>
                            {this.state.endokrinologjiOpen ? 'Read Less...' : 'Read More...'} 
                        </button>
                        <div className={`service-content ${this.state.endokrinologjiOpen ? 'open' : ''}`}> 
                            <p>Ne spitalin tone kryhen vizita specialistike endrokrinologjike per:Patologjite e gjendres tiroide ,Patologjite e gjendres se hipofizes, Semundjet e gjendres mbiveshkor,Hipertensioni me origjine endokrine, Diabeti Mellitus tip 1 dhe 2 dhe Obeziteti.
                          </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="gynecology.jpg" alt="Gjinekologji"></img>
                        </div>
                        <p className='title'>Gjinekologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleGjinekologjiCollapse}>{ }
                            { this.state.gjinekologjiOpen ? 'Read Less...' : 'Read More...' }{ }
           
                        </button>
                        <div className={`service-content ${this.state.gjinekologjiOpen ? 'open' : ''}`}>
                            <p>Ne Departamentin e shendetit te gruas dhe lindjeve qe prej themelimit te Spitalit SunriseCare trajtohen te gjitha problemet gjinekologjike, tumoret e organeve riprodhuese te gruas, crregullimet e menopauzes, ndjekja normale e shtatzenise, ndjekia e shtatzenive me rrezik te shtuar etj.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="alergology.jpg" alt="Alergologji"></img>
                        </div>
                        <p className='title'>Alergologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleAlergologjiCollapse}>{ }
                            {this.state.alergologjiOpen ? 'Read Less...' : 'Read More...'}{ }
                        </button>
                        <div className={`service-content ${this.state.alergologjiOpen ? 'open' : ''}`}>
                            <p>Reparti i alergologjise ne spitalin tone perfshin:Konsulta me mjekun alergolog, Ekzaminimet laboratorike, Ekzaminimet ne lekure, Spirometria.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="anesthesiology.jpg" alt="Anesteziologjia"></img>
                        </div>
                        <p className='title'>Anesteziologjia</p>
                        <button type='button' className='service-toggle' onClick={this.toggleAnesteziologjiaCollapse}>{ }
                            {this.state.anesteziologjiaOpen ? 'Read Less...' : 'Read More...'}{ }
                        </button>
                        <div className={`service-content ${this.state.anesteziologjiaOpen ? 'open' : ''}`}>
                            <p>Departamenti i anesteziologjise ne spitalin tone ofron anestezi te nderhyrjeve kirurgjikale ,anestezi te nderhyrjeve ditore,sedatim ne metodat invazive diagnostikuese,sedatim ne metodat invazive terapeutike,menaxhim i dhembjeve ne lindje, menaxhim i dhembjeve kronike,menaxhim i dhembjeve traumatike.</p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="checkuup.jpg" alt="Check Up"></img>
                        </div>
                        <p className='title'>Check Up</p>
                        <button type='button' className='service-toggle' onClick={this.toggleCheckupCollapse}>{ }
                            {this.state.checkupOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.checkupOpen ? 'open' : ''}`}>
                            <p>

                                Vizita e mjekut edhe nese ndihemi mire eshte shume e rendesishme sepse diagnostikimi ne stadet e para te semundjes con ne ecuri me te mire te saj, ndihmon ne parandalimin e semundjeve, Check Up  i juaj nuk vlereson vetem mireqenien tuaj fizike, por edhe shendetin tuaj mendor.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="dermatology.jpg" alt="Dermatologji"></img>
                        </div>
                        <p className='title'>Dermatologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleDermatologjiCollapse}>
                            {this.state.dermatologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.dermatologjiOpen ? 'open' : ''}`}>
                            <p>

                                Ne spitalin tone ne diagnostikojme dhe ndjekim ne vazhdimesi trajtimet e kartelizuara te pacienteve per patologjite dermatologjike te moshes pediatrike, semundjet kronike, diagnostikimin e patologjive malinje, trajtimin e patologjive te thonjve, flokeve, mukozes te gojes dhe infeksioneve gjenitale.
                            </p>
                        </div>
                    </div>


                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="gastroenterology.jpg" alt="Gastroenterologji"></img>
                        </div>
                        <p className='title'>Gastroenterologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleGastroenterologjiCollapse}>
                            {this.state.gastroenterologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.gastroenterologjiOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i Gastroenterologjise ne Spitalin SunriseCare i sherben pacienteve me probleme te sistemit tretes me profesionistet me te specializuar si dhe aparaturat e teknologjise me moderne. Ky sherbim aplikon metodat me te fundit endoskopike si ne diagnostikim ashtu edhe ne trajtimin mini invaziv te problemeve te ndryshme.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="hematology.jpg" alt="Hematologji"></img>
                        </div>
                        <p className='title'>Hematologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleHematologjiCollapse}>
                            {this.state.hematologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.hematologjiOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i Hematologjise ne Spitalin SunriseCare ofron nje sherbim te specializuar klinik, laboratorik dhe ne bashkepunim me laboratore te specializuara jashte vendit dhe analiza specifike ne te gjitha aspektet e fushes se Hematologjise. Hematologet diagnostikojne dhe trajtojne semundjet e rruazave te kuqe, rruazave te bardha, trombociteve ,pakesimi apo rritja e tyre.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="invitro.jpg" alt="Fekondimi in Vitro"></img>
                        </div>
                        <p className='title'>Fekondimi in Vitro</p>
                        <button type='button' className='service-toggle' onClick={this.toggleInvitroCollapse}>
                            {this.state.invitroOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.invitroOpen ? 'open' : ''}`}>
                            <p>
                                Ne fillim te fertilizimit in vitro kemi fazen e stimulimit ovarian e cila zgjat afro 8 deri 14 dite. Stimulimi zakonisht me injeksione subkutane te cilat nuk dhembin dhe mund te kryhen nga vete pacientja ne menyre ambulatore (pa ndihmen e mjekut apo infermieres). Gjate kesaj periudhe pacientja monitorizohet permes ekografise transvaginale dhe dozimeve hormonale per te percaktuar sa me sakte momentin se kur ovocitet (vezet) arrijne maturitetin (pjekurine)
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="cardiocirurgy.jpg" alt="Kardiokirurgji"></img>
                        </div>
                        <p className='title'>Kardiokirurgji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleKardiokirurgjiCollapse}>
                            {this.state.kardiokirurgjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.kardiokirurgjiOpen ? 'open' : ''}`}>
                            <p>
                                Kardiokirurgjia eshte nje fushe e specializuar e mjekesise qe fokusohet ne trajtimin kirurgjik te kushteve qe prekin zemren, mushkerite dhe organet e tjera ne gjoks. Kirurget kardiotorakale punojne ngushte me specialiste te tjere, si kardiologe, pulmonologe dhe anesteziologe, per te ofruar kujdesin me te mire te mundshem per pacientet e tyre.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="cardiology.jpg" alt="Kardiologji"></img>
                        </div>
                        <p className='title'>Kardiologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleKardiologjiCollapse}>
                            {this.state.kardiologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.kardiologjiOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i Kardiologjise mbulon me sherbim 24 ore ne 7 dite te javes cdo kerkese te poliklinikes dhe urgjencave kardiake duke i trajtuar ne menyre medikale, me koronaroangiografi, stentime ne rast nevoje, studim elektrofiziologjik, ablacion, pacemaker, defibrilatore, mbyllje defektesh te lindura e deri trajtimi me shume suksese me rruge perkutane i disekimeve te aortes.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="pediatri.jpg" alt="Pediatri"></img>
                        </div>
                        <p className='title'>Pediatri</p>
                        <button type='button' className='service-toggle' onClick={this.togglePediatriCollapse}>
                            {this.state.pediatriOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.pediatriOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i Pediatrise i sherben gjithe pacienteve te vegjel te grupmoshave nga 0 deri ne 15 vjec. Ekipi i profesionisteve te pediatrise kujdesen per shendetin e femijeve ne bashkepunim me koleget e tyre specialiste te fushave te tjera, duke mundesuar jo vetem ndjekjen ne poliklinike por edhe hospitalizimin e tyre.
                            </p>
                        </div>
                    </div>


                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="lab.jpg" alt="Sherbime laboratorike"></img>
                        </div>
                        <p className='title'>Sherbime laboratorike</p>
                        <button type='button' className='service-toggle' onClick={this.toggleLaboratorCollapse}>
                            {this.state.laboratorOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.laboratorOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i Laboratorit klinik biokimik, imunologjik, mikrobiologjik dhe patologjik ka kryer suksesshem suportin laboratorik te pacienteve ambulatore dhe hospitaliere, ne parandalimin dhe diagnostikimin e patologjive te ndryshme, me protokolle te pacienteve qe nga emergjencat, pacientet pre-operatore, te kimioteraapise, te hemodializes e deri ne pacientet post-transplant
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="kirurgji.jpg" alt="Kirurgji e pergjithshme"></img>
                        </div>
                        <p className='title'>Kirurgji e pergjithsme</p>
                        <button type='button' className='service-toggle' onClick={this.toggleKirurgjiCollapse}>
                            {this.state.kirurgjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.kirurgjiOpen ? 'open' : ''}`}>
                            <p>
                                Kirurgjia eshte nje teknike mjekesore e cila nenkupton kryerjen e nje veprimi fizik mbi indet, me shpesh me nje incision (prerje) dhe suture (qepje). Kirurgjia perfshin nje staf te kualifikuar me specializime afatgjata ne SHBA, France, Danimarke, Belgjike, Itali, Austri, Turqi etj.
                            </p>
                        </div>
                        </div>


                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="kirurgjiplastike.jpg" alt="Kirurgji plastike"></img>
                        </div>
                        <p className='title'>Kirurgji plastike</p>
                        <button type='button' className='service-toggle' onClick={this.toggleKirurgjiPlastikeCollapse}>
                            {this.state.kirurgjiPlastikeOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.kirurgjiPlastikeOpen ? 'open' : ''}`}>
                            <p>
                                Qe prej vitit 2008, mijera paciente i kane besuar Spitalit SunriseCare zgjedhjen e tyre per nje trup me te bukur, nje pamje me perfekte apo revizionimin e nje demtimi te meparshem.Kirurgjia Plastike e Spitalit SunriseCare, jo vetem u ka dhene pergjigje kerkesave te atyre qe kerkojne nje pamje me te sofistikuar, por ka thyer perfundimisht tabune qe kirurgjia plastike behet jashte vendit.
                            </p>
                        </div>
                    </div>


                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="nefrologji.jpeg" alt="Nefrologji"></img>
                        </div>
                        <p className='title'>Nefrologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleNefrologjiCollapse}>
                            {this.state.nefrologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.nefrologjiOpen ? 'open' : ''}`}>
                            <p>
                                Nje nga departamentet pararoje qe ka shenuar stadin me te avancuar ne trajtimet qe fusha e nefrologjise moderne ofron sot ne bote. Mjeket specialiste nefrolog punojne ngushte me specialiste te tjere,per te ofruar kujdes te cilesise se larte dhe me kosto efektive per pacientet qe vuajne nga problemet qe perfshijne veshkat, hipertensionin me origjine renale ose infeksione te aparatit urinar.
                            </p>
                        </div>
                    </div>


                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="neurologji.jpg" alt="Neurologji"></img>
                        </div>
                        <p className='title'>Neurologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleNeurologjiCollapse}>
                            {this.state.neurologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.neurologjiOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i Neurologjise ofron diagnostikimin dhe mjekimin e te gjithe games se semundjeve neurologjike. Mbeshtetur ne ekzaminimet me te sofistikuara imazherike, stafi i specializuar i radiologjise merret me interpretimin e tyre ( MRI, MRA CT, Angio-CT, ECHO Doppler, radiografi) dhe laboratori i specializuar diagnoztikojne problemet neurologjike.Ne Laboratorin e Neuroelektrofiziologjise kryhet EEG, Video EEG dhe polismonografi.
                            </p>
                        </div>
                    </div>


                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="neurok.jpg" alt="Neurokirurgji"></img>
                        </div>
                        <p className='title'>Neurokirurgji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleNeurokirurgjiCollapse}>
                            {this.state.neuroKirurgjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.neuroKirurgjiOpen ? 'open' : ''}`}>
                            <p>
                                Spitali SunriseCare ofron kujdesin me te mire neurokirurgjik, duke perfshire procedurat me te komplikuara, qe ndihmojne te rriturit dhe femijet me kushte komplekse dhe serioze.Neurokirurget tane kryejne me shume se 500 procedura intervenimi cdo vit ku perdoren qasje inovative, si kirurgjia e trurit zgjuar, kirurgjia e trurit me neuronavigim, kirurgjia e epilepsise, kirurgji endoskopike, radiokirurgjia dhe shume te tjera.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="okulistik.jpg" alt="Okulistike"></img>
                        </div>
                        <p className='title'>Okulistike</p>
                        <button type='button' className='service-toggle' onClick={this.toggleOkulistikCollapse}>
                            {this.state.okulistikOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.okulistikOpen ? 'open' : ''}`}>
                            <p>
                                Qendra e syrit ne Spitalin SunriseCare ofron sot gamen me te gjere te ekzaminimeve dhe nderhyrjeve kirurgjikale qe nje klinike moderne oftalmologjike mund te ofroje, duke kuruar te gjitha patologjite e syrit.Me staf te kualifikuar ne fusha te ndryshme, Spitali SunriseCare  ofron  korrigjimin e numrit te syzave me lazer, eliminimin e kataraktes me fakoemulsifikim, transplantin e kornese, trajtimin e keratokonusit, kirurgjine vitroretinale etj.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="orl.jpg" alt="ORL"></img>
                        </div>
                        <p className='title'>ORL</p>
                        <button type='button' className='service-toggle' onClick={this.toggleOrlCollapse}>
                            {this.state.orlOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.orlOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i Otorinolaringologjise kujdeset per te gjithe ata paciente qe vuajne nga problemet me veshin,hunden, koken dhe qafen. Ky departament bashkepunon me eksperte te audiologjise, endokrinologjise, oftalmologjise, neurokirurgjise, dermatologjise, alergjise dhe imunologjise, neurologjise, kirurgjise plastike ne varesi te situatave dhe problematikave qe shfaq pacienti.
                            </p>
                        </div>
                    </div>


                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="oncology.jpg" alt="Onkologji"></img>
                        </div>
                        <p className='title'>Onkologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleOnkologjiCollapse}>
                            {this.state.onkologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.onkologjiOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i onkologjise kujdeset per diagnostikimin dhe perpilimin e planit te trajtimit te pacienteve qe vuajne nga semundja e kancerit. Departamenti i onkologjise ne Spitalin SunriseCare ka ne baze te punes se tij bashkepunimin, punen ne ekip qe eshte edhe celesi i suksesit ne luften kunder kesaj semundjeje.
                            </p>
                        </div>
                    </div>



                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="pleumonogy.jpg" alt="Pneumologji"></img>
                        </div>
                        <p className='title'>Pneumologji</p>
                        <button type='button' className='service-toggle' onClick={this.togglePneumologjiCollapse}>
                            {this.state.pneumologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.pneumologjiOpen ? 'open' : ''}`}>
                            <p>
                                Mjekesia Pulmonare kujdeset per sherbimet diagnostike dhe te trajtimeve per te luftuar pamjaftueshmerine e sistemit te frymemarrjes dhe te semundjeve te mushkerise.Ne kemi eksperience per te ndihmuar pacientet gjate gjithe etapave te semundjes dhe trajtimit nga nje kolle kronike ose mungese ne frymemarrje deri ne trajtim me ventilator per pacientet e semure kritik.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="urology.jpg" alt="Urologji"></img>
                        </div>
                        <p className='title'>Urologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleUrologjiCollapse}>
                            {this.state.urologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.urologjiOpen ? 'open' : ''}`}>
                            <p>
                                Urologjia eshte nje specialitet mjekesor qe fokusohet ne diagnostikimin dhe trajtimin e kushteve qe prekin traktin urinar dhe sistemin riprodhues mashkullor. Urologet punojne ngushte me ofruesit e tjere te kujdesit shendetesor, si onkologet dhe nefrologet, per te ofruar kujdes te plote per pacientet e tyre.
                            </p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="reuma.jpg" alt="Reumatologji"></img>
                        </div>
                        <p className='title'>Reumatologji</p>
                        <button type='button' className='service-toggle' onClick={this.toggleReumatologjiCollapse}>
                            {this.state.reumatologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.reumatologjiOpen ? 'open' : ''}`}>
                            <p>
                                Departamenti i Reumatologjise disponon stafin dhe ekspertizen e nevojshme per trajtiminin e semundjeve reumatizmale duke perfshire rastet e thjeshta deri tek ato me te komplikuarat, ku shpeshhere gjejne kombinim ne trajtim me Departamentin e Ortopedise, Fizioterapise, Neurologjise etj.
                            </p>
                        </div>
                    </div>



                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="urgjenca.jpg" alt="Urgjenca 24h"></img>
                        </div>
                        <p className='title'>Urgjenca 24h</p>
                        <button type='button' className='service-toggle' onClick={this.toggleUrgjencaCollapse}>
                            {this.state.urgjencaOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.urgjencaOpen ? 'open' : ''}`}>
                            <p>Sherbim mjekesor 24 ore nga staf i kualifikuar, RM (renozance magnetike) ne ambientet e saj si dhe 2 laboratore 24 ore.Dy ambulanca te pajisura ne menyre moderne per te kryer transporte me siguri maksimale bashke me nje staf mjekesor te specializuar per emergjenca te shkalleve te larta.</p>
                        </div>
                    </div>


                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="proct.jpg" alt="Proktologjia"></img>
                        </div>
                        <p className='title'>Proktologjia</p>
                        <button type='button' className='service-toggle' onClick={this.toggleProktologjiCollapse}>
                            {this.state.proktologjiOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.proktologjiOpen ? 'open' : ''}`}>
                            <p>Kabineti i Proktologjise ne spitalin tone eshte nje nder kabinetet me te kompletuara ne vend, qe ofron diagnostikimin dhe trajtimin e semundjeve te ndryshme te zorres se trashe.Vleresimi i pacienteve fillon  me konsulten proktollogjike, gjate se ciles respektohet maksimalisht  privacia e pacientit, duke vazhduar me pas me ekzaminimet suplementare diagnostikuese dhe trajtimet kirurgjikale .</p>
                        </div>
                    </div>

                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="salla.jpg" alt="Sallat e lindjes"></img>
                        </div>
                        <p className='title'>Sallat e lindjes</p>
                        <button type='button' className='service-toggle' onClick={this.toggleSallatCollapse}>
                            {this.state.sallatelindjesOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.sallatelindjesOpen ? 'open' : ''}`}>
                            <p>Dhoma e qendres se lindjes eshte nje hapesire e specializuar brenda nje qendre lindjeje ku grate mund te lindin ne nje mjedis shtepiak me ndihmen e mamive ose ofruesve te tjere te trajnuar te kujdesit shendetesor. Qendrat e lindjes jane krijuar per te ofruar nje mjedis te rehatshem dhe mbeshtetes per grate qe deshirojne nje pervoje te lindjes natyrale me nderhyrje minimale mjekesore.</p>
                        </div>
                    </div>



                    <div className='card-sherbimet'>
                        <div className='img'>
                            <img src="qendra.jpg" alt="Qendra e dializes"></img>
                        </div>
                        <p className='title'>Qendra e dializes</p>
                        <button type='button' className='service-toggle' onClick={this.toggleQendraedializesCollapse}>
                            {this.state.qendraedializesOpen ? 'Read Less...' : 'Read More...'}
                        </button>
                        <div className={`service-content ${this.state.qendraedializesOpen ? 'open' : ''}`}>
                            <p>Spitali jone posedon 11 qendra dialize ne gjithe vendin, 5 nga te cilat jane te Diavita shpk, nje kompani qe eshte formuar si bashkepunim i shoqerive Evita Shpk dhe Spitalit Amerikan dhe operon sipas modelit te Partneritetit Publik Privat.</p>
                        </div>
                    </div>
            </div>
          
                <FooterPage />
            </Fragment>
        );



    }
}